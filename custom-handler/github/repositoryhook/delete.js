
module.exports = function( event, context ) {
	delete_github_hook( event.ResourceProperties.RepositoryName , event.ResourceProperties.GithubToken,  event.PhysicalResourceId ,function(err, data ) {
		if (err)
			return cfn.send(event, context, cfn.FAILED, { errorMessage: JSON.stringify(err) });

		return cfn.send(event, context, cfn.SUCCESS );
	})
}
