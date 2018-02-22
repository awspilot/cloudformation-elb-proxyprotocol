
module.exports = function( event, context ) {
	add_github_hook( event.ResourceProperties.RepositoryName , event.ResourceProperties.GithubToken, {
		name: 'web',
		config: {
			url: event.ResourceProperties.Hook.Url,
			content_type: event.ResourceProperties.Hook.ContentType, // form
			active: event.ResourceProperties.Hook.hasOwnProperty('Active') ? event.ResourceProperties.Hook.Active === true : true,
			//events: ["push","pull_request"]
			//secret
			//insecure_ssl
		}
	},function(err, data ) {
		if (err)
			return cfn.send(event, context, cfn.FAILED, { errorMessage: JSON.stringify(err) });

		if (!data.hasOwnProperty('id'))
			return cfn.send(event, context, cfn.FAILED, { errorMessage: data.message || 'Failed Creating Hook' });

		console.log("created hook=", data )
		var ret = {
			id: data.id.toString(),
		}

		return cfn.send(event, context, cfn.SUCCESS, ret, ret.id );
	})
}
