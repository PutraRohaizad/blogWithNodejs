
exports.up = function(knex, Promise) {
  
    return knex.schema
    .createTable('post',(table) =>{
        table.increments('id');
        table.string('title',255);
        table.string('body',255);
        table.string('test',255);
        table.timestamps();

    });

};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable('post');
};
