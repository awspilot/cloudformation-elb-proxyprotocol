
get_github_repo = function(repo, token, cb) {
	request({
		url     : 'https://api.github.com/repos/' + repo,
		headers : {authorization : 'token ' + token, 'user-agent'  : 'github-api-basic <https://github.com/awspilot>' },
		json    : true,
	}, function (err, r, b) {
		if (err)
			return cb(err)

		cb(null, b)
	});
}

module.exports = function( event, context ) {
	get_github_repo( event.ResourceProperties.Name , event.ResourceProperties.GithubToken, function(err, data ) {
		if (err)
			return cfn.send(event, context, cfn.FAILED, { errorMessage: JSON.stringify(err) });

		if (!data.hasOwnProperty('id'))
			return cfn.send(event, context, cfn.FAILED, { errorMessage: data.message || 'Failed Getting Repository' });

		console.log("got repo=", data )
		var ret = {
			id: data.id.toString(),
			name: data.name,
			full_name: data.full_name,
			description: data.description,
			private: data.private,
			fork: data.fork,
		}
		// can not return data -> Response object is too long.
		return cfn.send(event, context, cfn.SUCCESS, ret, ret.id );
	})
}
