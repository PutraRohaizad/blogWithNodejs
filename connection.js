const options = require ('./knexfile').development;
const knex = require ('knex')(options);

const Bookshelf = require('bookshelf')(knex);
Bookshelf.plugin('registry');

module.exports = Bookshelf;