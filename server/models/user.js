'use strict';

var BaseModel = require('./base');

class User extends BaseModel {

  constructor(tableName) {
    super(tableName);
  }

}

var user = null;

module.exports = (() => {
  if (user) return user;
  user = new User('t_users');
  return user;
})();
