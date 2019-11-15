
exports.up = (knex, Promise) => {
    return knex.schema.createTable('sf', function (table) {
        table.increments().primary()
        table.string('name')
        table.string('profilePic')
        
    })
  
};

exports.down = function(knex) {
  
};
