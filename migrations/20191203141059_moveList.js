
exports.up = (knex, promise) => {
  return knex.schema.createTable('moveList', function (table) {
      table.increments('moveId').primary()
      table.string('name')
      table.string('input')
  })

};  

exports.down = (knex, promise) => {
  return knex.schema.dropTable('moveList')
};
