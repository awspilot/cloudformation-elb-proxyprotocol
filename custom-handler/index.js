console.log('Loading function');
var AWS = require('aws-sdk');
const response = require('cfn-response');
exports.handler = function(event, context) {
    // create, update, and delete
    console.log(event)
    switch (event.RequestType) {
        case 'Delete':
            return response.send(event, context, response.SUCCESS);
            break;
        case 'Update':
            return response.send(event, context, response.SUCCESS);
            break;
        case 'Create':
            return response.send(event, context, response.SUCCESS);
            break;
    }
    response.send(event, context, response.FAILED );
    // response.send(event, context, response.SUCCESS, {Value: 'test'} )
};
