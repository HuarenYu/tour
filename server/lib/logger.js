var winston = require('winston');

var env = process.env.NODE_ENV || 'development';

var logger;

if (env === 'development') {
  logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({ colorize: true })
    ]
  });
} else if (env === 'production') {
  logger = new (winston.Logger)({
    transports: [
      new (winston.transports.File)({
        level: 'error',
        filename: '/var/log/tour/tour.log', 
        json: false
    })]
  });
}

module.exports = logger || winston;
