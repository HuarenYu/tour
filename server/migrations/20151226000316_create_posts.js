
exports.up = function(knex, Promise) {
  knex.schema.createTable('t_posts', (table) => {
    table.increments('id').primary();
    table.integer('user_id');
    table.string('title', 128);
    table.string('excerpt', 128);
    table.text('content');
    table.string('attachments');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('t_posts');
};
