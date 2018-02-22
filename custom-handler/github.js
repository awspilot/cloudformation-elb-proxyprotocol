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

module.exports = {
	
}
