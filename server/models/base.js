'use strict';

var knex = require('knex');
var db = knex(require('../knexfile')[process.env.NODE_ENV || 'development']);

class BaseModel {

  constructor(tableName) {
    this.tableName = tableName;
    this.db = db;
  }

  prepare() {
    return this.db(this.tableName);
  }

}

module.exports = BaseModel;
