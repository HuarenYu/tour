var express = require('express');
var router = express.Router();

var adminRoutes = require('./admin');
var clientRoutes = require('./client');
var authRoutes = require('./auth');

router.use('/api/admin', adminRoutes);
router.use('/api/client', clientRoutes);
router.use('/api/auth', authRoutes);

module.exports = router;
