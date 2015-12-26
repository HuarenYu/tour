
exports.up = function(knex, Promise) {
  knex.schema.createTable('t_comments', (table) => {
    table.increments('id').primary();
    table.interger('parent_id');
    table.integer('post_id');
    table.integer('user_id');
    table.string('content', 1024);
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('t_comments');
};
