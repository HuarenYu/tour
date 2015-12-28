'use strict';

var knex = require('knex');
var db = knex(require('../knexfile')[process.env.NODE_ENV || 'development']);
class BaseModel {
  constructor() {
    this.db = db;
  }
  insert() {
    return this.db();
  }
}

module.exports = BaseModel;
