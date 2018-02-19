
var AWS = require('aws-sdk');
var request = require('request');

const cfn = require('cfn-response');

exports.handler = function(event, context) {

	console.log("event=",event)
	if (['Create','Update', 'Delete'].indexOf(event.RequestType) === -1 )
		return cfn.send(event, context, cfn.FAILED, { errorMessage: 'invalid RequestType'} );

	var methods = { create: 'PUT', update: 'POST', delete: 'DELETE' }

	var method = methods[ event.RequestType.toLowerCase() ]
	var resource;
	switch (event.ResourceType.toLowerCase()) {
		case 'custom::awspilotgithubtoken':
			resource = 'grant'
			break;
		default:
			// unknown resource type
			return cfn.send(event, context, cfn.FAILED, { errorMessage: 'unhandled ResourceType'} );
	}

	var request_uri = 'https://api.awspilot.com/cf/v1/' + resource

	console.log(method, request_uri )

	var headersOpt = { "content-type": "application/json", };
	request({
		url: request_uri,
		method:method,
		json: event.ResourceProperties,

		//form: ,
		//headers: headersOpt,
		//json: true,
	}, function (err, r, body) {
		console.log("got reply from api ", body, err );
		return cfn.send(event, context, cfn.SUCCESS, {err: err, body: body } );
	});

};
