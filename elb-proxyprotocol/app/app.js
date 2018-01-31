var http_server = require('findhit-proxywrap').proxy(require('http'), { strict: false } ).createServer( function (req, res) {
	res.write('<pre>')
	res.write("PROXYPROTOCOL> " + req.method + ' ' + req.headers.host + req.url + "\n" )
	res.write("PROXYPROTOCOL> headers=" + JSON.stringify(req.headers,null,"\t") + "\n" )
	res.write("PROXYPROTOCOL> req.connection.remoteAddress=" + req.connection.remoteAddress + "\n" )
	res.end('')
});
http_server.listen( process.env.HTTP_PORT || 8080 );





/*
var sniOptions = {}
var https_server = require('findhit-proxywrap').proxy(require('https'), { strict: false }).createServer( sniOptions, function (req, res) {
	res.write('<pre>')
	res.write("PROXYPROTOCOL> " + req.method + ' ' + req.headers.host + req.url + "\n" )
	res.write("PROXYPROTOCOL> headers=" + JSON.stringify(req.headers,null,"\t") + "\n" )
	res.write("PROXYPROTOCOL> req.connection.remoteAddress=" + req.connection.remoteAddress + "\n" )
	res.end('')
});
http_server.listen(process.env.HTTPS_PORT || 8443);
*/
