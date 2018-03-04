
async   = require('async');
request = require('request');

cfn = require('./cfn-response');
github = require('./github')

exports.handler = function(event, context) {

	console.log("event=",event)
	if (['Create','Update', 'Delete'].indexOf(event.RequestType) === -1 )
		return cfn.send(event, context, cfn.FAILED, { errorMessage: 'invalid RequestType'} );

	var methods = { create: 'PUT', update: 'POST', delete: 'DELETE' }

	var method = methods[ event.RequestType.toLowerCase() ]
	var resource;
	switch (event.ResourceType.toLowerCase()) {
		// handled by awspilot api
		case 'custom::awspilotaccount':
			resource = 'account'
			break;
		case 'custom::awspilotgithubtoken':
			resource = 'github/grant'
			break;
		case 'custom::awspilotawsgrant':
			resource = 'aws/grant'
			break;
		case 'custom::awspilotdeploymentgithubs3zip':
			resource = 'deployment/github/s3zip'
			break;

		// handled localy
		case 'custom::githubrepositoryref':
			try {
				resource = require('github/repositoryref/' + method.toLowerCase() )
			} catch (e) {
				console.log(e)
				return cfn.send(event, context, cfn.FAILED, {errorMessage: JSON.stringify(e)} );
			}
			break;
		case 'custom::githubrepositoryhook':
			try {
				resource = require('github/repositoryhook/' + method.toLowerCase() )
			} catch (e) {
				console.log(e)
				return cfn.send(event, context, cfn.FAILED, {errorMessage: JSON.stringify(e)} );
			}
			break;

		default:
			// unknown resource type
			return cfn.send(event, context, cfn.FAILED, { errorMessage: 'unhandled ResourceType'} );
	}

	if (typeof resource === "function")
		return resource( event, context )

	var request_uri = 'https://api.awspilot.com/cf/v1/' + resource

	console.log(method, request_uri )

	var headersOpt = { "content-type": "application/json", };
	request({
		url: request_uri,
		method:method,
		json: event,
	}, function (err, r, body) {

		if ((body || []).length !== 2)
			return cfn.send(event, context, cfn.FAILED, { errorMessage: 'invalid response from awspilot api'} );

		var err = body[0]
		var data = body[1]

		if (err)
			return cfn.send(event, context, cfn.FAILED, { errorMessage: JSON.stringify(err) } );

		return cfn.send(event, context, cfn.SUCCESS, data, data.physicalResourceId );
	});

};
