
exports.up = function(knex, Promise) {
  return knex.schema.table('hikes_completed', function(table){
    table.integer('distance');
    table.integer('difficulty');
  })
};

exports.down = function(knex, Promise) {
};
