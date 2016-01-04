'use strict';

var express = require('express');
var router = express.Router();
var User = require('../../models/user');

router.get('/users', (req, res) => {
  User
  .prepare()
  .where({})
  .then((users) => {
    res.json(users);
  })
  .catch((error) => {
    console.log(error);
    res.json({error: 'error'});
  });
});

module.exports = router;
