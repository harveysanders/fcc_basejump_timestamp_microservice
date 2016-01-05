'use strict';

var Users = require('../models/users.js');

function clickHandler () {

	return {
		getClicks: function (req, res) {
			Users
				.findOne({ 'github.id': req.user.github.id }, { '_id': false })
				.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.nbrClicks);
				});
		},

		addClick: function (req, res) {
			Users
				.findOneAndUpdate({ 'github.id': req.user.github.id }, { $inc: { 'nbrClicks.clicks': 1 } })
				.exec(function (err, result) {
						if (err) { throw err; }

						res.json(result.nbrClicks);
					}
				);
		},

		resetClicks: function (req, res) {
			Users
				.findOneAndUpdate({ 'github.id': req.user.github.id }, { 'nbrClicks.clicks': 0 })
				.exec(function (err, result) {
						if (err) { throw err; }

						res.json(result.nbrClicks);
					}
				);
		},
	};
}

module.exports = clickHandler;
