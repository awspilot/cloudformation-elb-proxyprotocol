
var AWS = require('aws-sdk');
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

	console.log(methods, request_uri )

	return response.send(event, context, response.SUCCESS);
	// response.send(event, context, response.SUCCESS, {Value: 'test'} )
};
