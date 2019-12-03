
exports.seed = (knex, promise) => {
  // Deletes ALL existing entries
  return knex('moveList').del()
    .then(function () {
      // Inserts seed entries
      return knex('moveList').insert([
        {moveId: 1, name: 'Gou Hadouken', input: 'placeholder ', character_id: '1'},
        {moveId: 2, name: 'Zankuu Hadouken', input: 'placeholder ', character_id: '1'},
        {moveId: 3, name: 'Shankunetsu-Hadouken', input: 'placeholder ', character_id: '1'},
        {moveId: 4, name: 'Gou Shoryuken', input: 'placeholder ', character_id: '1'},
        {moveId: 5, name: 'Tastumaki Zankuukyaku / Air', input: 'placeholder ', character_id: '1'},
        {moveId: 6, name: 'Ashura Senku', input: 'placeholder ', character_id: '1'},
        {moveId: 7, name: 'Hyakkishu', input: 'placeholder ', character_id: '1'},
        {moveId: 8, name: 'Super Art I: Messatsu Gou Hadou', input: 'placeholder ', character_id: '1'},
        {moveId: 9, name: 'Super Art I: Tenma Gou Zankuu', input: 'placeholder ', character_id: '1'},
        {moveId: 10, name: 'Super Art II: Messatsu Gou Shoryu', input: 'placeholder ', character_id: '1'},
        {moveId: 11, name: 'Super Art III: Messatsu-Gourasen', input: 'placeholder ', character_id: '1'},
        {moveId: 12, name: 'Super Art III: Messatsu-GouSenpuu', input: 'placeholder ', character_id: '1'},
        {moveId: 13, name: 'Max Super Art: Shungokusatsu', input: 'placeholder ', character_id: '1'},
        {moveId: 14, name: 'Max Super Art: Kongou kokuretsuzan', input: 'placeholder ', character_id: '1'},
      ]);
    });
};
