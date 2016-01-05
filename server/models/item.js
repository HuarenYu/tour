'use strict';

var BaseModel = require('./base');

class Item extends BaseModel {

  constructor(tableName) {
    super(tableName);
  }

}

var item = null;

module.exports = (() => {
  if (item) return item;
  item = new Item('t_items');
  return item;
})();
