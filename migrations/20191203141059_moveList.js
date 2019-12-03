
exports.up = (knex, promise) => {
  return knex.schema.createTable('moveList', function (table) {
      table.increments('moveId').primary()
      table.string('name')
      table.string('input')
      table.integer('character_id')
  })

};  

exports.down = (knex, promise) => {
  return knex.schema.dropTable('moveList')
};
