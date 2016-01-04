
exports.up = function(knex, Promise) {
  return knex.schema.createTable('t_orders', (table) => {
    table.increments('id').primary();
    table.integer('customer_id');
    table.integer('landscape_id');
    table.integer('status');
    table.string('booked_dates');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('t_orders');
};
