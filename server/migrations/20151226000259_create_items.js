
exports.up = function(knex, Promise) {
  return knex.schema.createTable('t_items', (table) => {
    table.increments('id').primary();
    table.integer('owner_id');
    table.integer('location_id');
    table.string('name');
    table.float('price');
    table.string('title');
    table.string('desc');
    table.text('detail');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('t_items');
};
