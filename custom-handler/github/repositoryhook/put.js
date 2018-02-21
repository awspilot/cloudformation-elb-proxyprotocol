
add_github_hook = function(repo, token, hook_info , cb ) {
	request({
		url     : 'https://api.github.com/repos/' + repo + '/hooks',
		method: 'POST',
		headers : {authorization : 'token ' + token, 'user-agent'  : 'github-api-basic <https://github.com/awspilot>' },
		json    : hook_info,
	}, function (err, r, b) {
		if (err)
			return cb(err)

		cb(null, b)
	});
}

module.exports = function( event, context ) {
	add_github_hook( event.ResourceProperties.RepositoryName , event.ResourceProperties.GithubToken, {
		name: 'web',
		config: {
			url: 'http://example.com/webhook',
			content_type: 'json', // form
			active: true,
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
