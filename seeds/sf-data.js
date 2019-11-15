
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('sfCharacters').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, characterName: 'Akuma', pP: 'qq', origin: 'Unkown (presumably Japan)', bloodType: 'Uknown', height: 178, weight: 102, likes: 'Martial Arts, Training, Raging Demon, Satsui no Hadou, Fighting Evil Ryu, Strong Opponents, Becoming stronger', dislikes: 'Gouken, Anyone who interferes with his training, Goutetsu', fightingStyle: 'Satsui no Hadou-infused ansatsuken art'},
        {id: 2, characterName: 'Alex', pP: 'qq', origin: 'test', bloodType: 'test', height: 0, weight: 0, likes: 'test', dislikes: 'test', fightingStyle: 'test'},
        {id: 3, characterName: 'Dudley', pP: 'qq', origin: '', bloodType: 'test', height: 0, weight: 0, likes: 'test', dislikes: 'test', fightingStyle: 'test'}
      ]);
    });
};
