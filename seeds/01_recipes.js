
exports.seed = function(knex) {
  // Truncates ALL existing entries
  return knex('Recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        {
          recipe_name: 'apple pie'
        },
        {
          recipe_name: 'cheese cake'
        },
      ]);
    });
};
