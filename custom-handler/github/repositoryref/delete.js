
module.exports = function( event, context ) {
	return cfn.send(event, context, cfn.SUCCESS, {} );
}
