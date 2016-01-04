
exports.up = function(knex, Promise) {
  return knex.schema.createTable('t_comments', (table) => {
    table.increments('id').primary();
    table.integer('parent_id');
    table.integer('post_id');
    table.integer('user_id');
    table.string('content', 1024);
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('t_comments');
};
