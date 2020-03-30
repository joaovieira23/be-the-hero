const knex = require('knex');
const Configuration = require('../../knexfile');

const connection = knex(Configuration.development);

module.exports = connection;
