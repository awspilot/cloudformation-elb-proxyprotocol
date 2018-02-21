delete_github_hook = function(repo, token, hook_id , cb ) {
	request({
		url     : 'https://api.github.com/repos/' + repo + '/hooks/' + hook_id,
		method: 'DELETE',
		headers : {authorization : 'token ' + token, 'user-agent'  : 'github-api-basic <https://github.com/awspilot>' },
		json    : true,
	}, function (err, r, b) {
		if (err)
			return cb(err)

		cb(null, b)
	});
}

module.exports = function( event, context ) {
	delete_github_hook( event.ResourceProperties.RepositoryName , event.ResourceProperties.GithubToken,  event.PhysicalResourceId ,function(err, data ) {
		if (err)
			return cfn.send(event, context, cfn.FAILED, { errorMessage: JSON.stringify(err) });

		return cfn.send(event, context, cfn.SUCCESS );
	})
}
