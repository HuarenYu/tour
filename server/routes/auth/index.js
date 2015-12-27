var express = require('express');
var router = express.Router();

router.post('/login', (req, res, next) => {
  res.json({message: 'cool'});
});

router.post('/register', (req, res, next) => {

});

module.exports = router;
