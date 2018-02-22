
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
