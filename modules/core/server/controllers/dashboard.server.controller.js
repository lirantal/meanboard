'use strict';

var path = require('path');
var config = require(path.resolve('config/config'));

var _ = require('lodash');

var high = 100;
var low = 0;
var rand = 0;

exports.randomInt = function(req, res) {

  	rand = _.random(low, high);

  	var test = {
  		'log': rand
  	};

  	res.json(test);
};