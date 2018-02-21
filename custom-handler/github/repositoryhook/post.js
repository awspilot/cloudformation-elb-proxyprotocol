
module.exports = function( event, context ) {
	return cfn.send(event, context, cfn.FAILED, { errorMessage: 'Update webhook not supported, please delete and re-create the hook' });
}
