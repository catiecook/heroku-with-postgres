
exports.up = function(knex, Promise) {
  return knex.schema.createTable('hikes_completed', function(table){
    table.string('name');
    table.string('location');
    table.string('distance');
    table.string('difficulty');
    table.integer('rating');
    table.string('date_completed');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.scheme.dropTable('hikes_completed')
};
