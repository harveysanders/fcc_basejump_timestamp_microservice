'use strict';
var moment = require('moment');

function timestampHandler() {
	return {
		getTime: function(req, res) {
			var timeReq = req.params.timeString;

			function strToNum(str) {
				if (!isNaN(str)) {
					return parseInt(str);
				}return str;
			}
			
			function createMomentDate(time) {
				if (isNaN(strToNum(time))) {
					return moment(new Date(time));
				} else {
					return moment.unix(time);
				}
			}
			

			if (moment(strToNum(timeReq)).isValid()) {
				var time = createMomentDate(timeReq);
				res.json({
					unix: time.format('X'),
					natural:  time.format('MMMM D, YYYY') //December 15, 2015
				});
			} else {
				res.json({
					unix: null,
					natural: null
				});
			}

			console.log('valid time ' + moment(strToNum(timeReq)).isValid());

		}
	};
}

module.exports = timestampHandler;