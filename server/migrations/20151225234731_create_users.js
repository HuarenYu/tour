
exports.up = function(knex, Promise) {
  return knex.schema.createTable('t_users', (table) => {
    table.increments('id').primary();
    table.string('username', 32);
    table.string('mobile_phone', 16);
    table.string('email', 128);
    table.string('password', 128);
    //是否关注
    //0 没有关注 1 已经关注
    table.integer('subscribe');
    table.string('openid', 128);
    table.string('nickname', 64);
    //性别
    //1 男性 2 女性 0 未知
    table.integer('sex');
    table.string('city', 16);
    table.string('province', 16);
    table.string('country', 16);
    table.string('language', 16);
    table.string('headimgurl');
    table.integer('subscribe_time');
    table.string('unionid', 128);
    table.string('remark');
    table.integer('groupid');
    //用户类型
    //1 微信 2 注册
    table.integer('user_type');
    //用户角色
    //customer dealer admin
    table.string('user_roles');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('t_users');
};
