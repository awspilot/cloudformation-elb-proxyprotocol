
var AWS = require('aws-sdk');
var request = require('request');

const response = require('cfn-response');

exports.handler = function(event, context) {

	console.log("event=",event)
	if (['Create','Update', 'Delete'].indexOf(event.RequestType) === -1 )
		return response.send(event, context, response.FAILED, { errorMessage: 'invalid RequestType'} );

	var methods = { create: 'PUT', update: 'POST', delete: 'DELETE' }

	var method = methods[ event.RequestType.toLowerCase() ]
	var resource;
	switch (event.ResourceType.toLowerCase()) {
		case 'custom::awspilotgithubtoken':
			resource = 'grant'
			break;
		default:
			// unknown resource type
			return response.send(event, context, response.FAILED, { errorMessage: 'unhandled ResourceType'} );
	}

	var request_uri = 'https://api.awspilot.com/cf/v1/' + resource

	console.log(method, request_uri )

	var headersOpt = { "content-type": "application/json", };
	request({
		method:method,
		url: request_uri,
		form: event.ResourceProperties,
		headers: headersOpt,
		json: true,
	}, function (err, r, body) {
		console.log("got reply from api ", body, err );
		return response.send(event, context, response.SUCCESS, {err: err, body: body } );
	});

};
