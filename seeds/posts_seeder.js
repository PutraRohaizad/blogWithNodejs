
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post').del()
    .then(function () {
      // Inserts seed entries
      return knex('post').insert([
        {id: 1, title: 'First', body: 'This is a body 1', created_at: new Date, updated_at: new Date},
        {id: 2, title: 'Second', body: 'This is a body 2', created_at: new Date, updated_at: new Date},

      ]);
    });
};
