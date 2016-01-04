
exports.up = function(knex, Promise) {
  return knex.schema.createTable('t_locations', (table) => {
    table.increments('id').primary();
    table.integer('parent_id');
    table.string('name', 16);
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('t_locations');
};
