'use strict';

var express = require('express');
var router = express.Router();
var response = require('../../lib/response');
var logger = require('../../lib/logger');
var User = require('../../models/user');
var Item = require('../../models/item');

router.get('/recommendItems', (req, res) => {
  Item
  .prepare()
  .whereIn('id', [1])
  .then((items) => {
    res.json(response.ok({items: items}));
  })
  .catch((error) => {
    logger.error(error);
    res.json(response.internalError('query errors.'));
  });
});

module.exports = router;
