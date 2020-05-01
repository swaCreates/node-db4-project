
exports.seed = function(knex) {
  // Truncates ALL existing entries
  return knex('Ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        {
          ingredient: 'butter'
        },
        {
          ingredient: 'apples'
        },
        {
          ingredient: 'pie crust'
        },
        {
          ingredient: 'block of cream cheese'
        },
        {
          ingredient: 'sugar'
        },
      ]);
    });
};
