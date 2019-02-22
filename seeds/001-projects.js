
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Finish Sprint Challenge',
          description: 'Work hard. Do well. Meet with Abdul. Be with your wife after it\'s over.'
        }
      ]);
    });
};
