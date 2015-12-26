
exports.up = function(knex, Promise) {
  knex.schema.createTable('t_locations', (table) => {
    table.increments('id').primary();
    table.integer('parent_id');
    table.string('name', 16);
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('t_locations');
};
