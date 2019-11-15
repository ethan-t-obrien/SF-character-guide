
exports.up = (knex, Promise) => {
    return knex.schema.createTable('sfCharacters', function (table) {
        table.increments().primary()
        table.string('characterName')
        table.string('pP')
        table.string('origin')
        table.string('bloodType')
        table.integer('height')
        table.integer('weight')
        table.string('likes')
        table.string('dislikes')
        table.string('fightingStyle')

    })
  
};  

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('sfCharacters')
  
};
