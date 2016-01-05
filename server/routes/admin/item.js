'use strict';

var express = require('express');
var router = express.Router();
var Item = require('../../models/item');
var response = require('../../lib/response');

router.get('/', (req, res) => {
  var page = req.query.page || 1;
  var limit = 10;
  Item
  .prepare()
  .where({})
  .limit(limit).offset((page - 1) * limit)
  .orderBy('id', 'desc')
  .then((items) => {
    res.json(response.ok(items));
  })
  .catch((error) => {
    res.json(response.internalError('database error.'));
  });
});

router.get('/:id', (req, res) => {
  Item
  .prepare()
  .where({id: req.params.id})
  .then((items) => {
    res.json(response.ok(items.length > 0 ? items[0] : null));
  })
  .catch((error) => {
    res.json(response.internalError('database error.'));
  });
});

router.post('/', (req, res) => {
  var item = {
    name: req.body.name,
    title: req.body.title,
    price: req.body.price,
    desc: req.body.desc,
    detail: req.body.detail
  };
  Item
  .prepare()
  .insert(item)
  .then((itemId) => {
    item.id = itemId;
    res.json(response.ok(item));
  })
  .catch((error) => {
    res.json(response.internalError('database error.'));
  });
});

router.patch('/', (req, res) => {

});

module.exports = router;
