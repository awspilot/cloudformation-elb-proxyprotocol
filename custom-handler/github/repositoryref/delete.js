module.exports = function( event, context ) {
	cfn.send(event, context, cfn.FAILED, { errorMessage: "Not Implemented" });
}
