
exports.up = function(knex, Promise) {
  return knex.schema.createTable('t_items', (table) => {
    table.increments('id').primary();
    table.integer('owner_id');
    table.integer('location_id');
    table.string('name', 128);
    table.string('captures', 1024);
    table.decimal('price');
    table.string('desc');
    table.text('detail');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('t_items');
};
