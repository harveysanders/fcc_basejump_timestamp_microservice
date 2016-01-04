'use strict';

function requestHandler() {
	return {
		headerParser: function(req, res) {
			var header = req.headers;
			console.log(header);

			var parens = /\(([^)]+)\)/;

			res.json({
				ipaddress: header['x-forwarded-for'] || req.connection.remoteAddress,
				language: header['accept-language'].split(',')[0],
				software: parens.exec(header['user-agent'])[1]
			});
		}
	};
}

module.exports = requestHandler;