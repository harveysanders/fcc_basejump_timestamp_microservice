'use strict';

function timestampHandler() {
	return {
		getTime: function(req, res) {
			var timeReq = req.params.timeString;

			console.log(timeReq);
			res.send('got it' + timeReq);
		}
	};
}

module.exports = timestampHandler;