
exports.up = function(knex, Promise) {
  knex.schema.createTable('t_orders', (table) => {
    table.increments('id').primary();
    table.integer('customer_id');
    table.integer('landscape_id');
    table.integer('status');
    table.string('booked_dates');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('t_orders');
};
