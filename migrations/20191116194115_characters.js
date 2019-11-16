exports.up = (knex, promise) => {
  return knex.schema.createTable('characters', function (table) {
      table.increments('characterId').primary()
      table.string('characterName')
      table.string('pP')
      table.string('origin')
      table.string('bloodType')
      table.integer('height')
      table.integer('weight')
      table.string('likes')
      table.string('dislikes')
      table.string('fightingStyle')
      table.string('story')
      table.string('personality')
  })

};  

exports.down = (knex, promise) => {
  return knex.schema.dropTable('characters')
};