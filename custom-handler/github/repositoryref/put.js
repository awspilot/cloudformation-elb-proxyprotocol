module.exports = functon( event, context ) {
	cfn.send(event, context, cfn.FAILED, { errorMessage: 'not implemented'} );
}
