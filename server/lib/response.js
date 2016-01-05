'use strict';

exports.ok = (data) => {
  return {
    statusCode: 200,
    statusMsg: 'request success',
    data: data
  }
};

exports.invalidError = (error) => {
  return {
    statusCode: 400,
    statusMsg: 'request invalid',
    error: error
  }
};

exports.internalError = (error) => {
  return {
    statusCode: 500,
    statusMsg: 'internal error',
    error: error
  }
};
