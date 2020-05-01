
exports.seed = function(knex) {
  // Truncates ALL existing entries
  return knex('Recipe_instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipe_instructions').insert([
        {
          recipe_id: 1,
          ingredient_id: 5,
          quantity_of_ingredients: 1,
          instructions: 'put smahed apples into pie crust and bake for 40 miniutes'
        },
      ]);
    });
};
