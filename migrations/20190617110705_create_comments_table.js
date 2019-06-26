
exports.up = function(knex, Promise) {
  
    return knex.schema
    .createTable('comments',(table) =>{
        table.increments('id');
        table.string('message',255);
        table.timestamps();

        // foreign key
        table.integer('post_id').unsigned();
        table.foreign('post_id').references('id').inTable('post').onDelete('cascade');

    });

};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable('comments');
};
