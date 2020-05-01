
exports.seed = function(knex) {
  // Truncates ALL existing entries
  return knex('Recipe_instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipe_instructions').insert([
        {
          recipe_id: 1,
          ingredient_id: 2,
          quantity_of_ingredients: 3,
          instructions: 'wash apples, peel, cut them up and put into bowl'
        },
        {
          recipe_id: 1,
          ingredient_id: 5,
          quantity_of_ingredients: 2.5,
          instructions: 'add 2 1/2 scoops of sugar into bowl'
        },
        {
          recipe_id: 1,
          ingredient_id: 3,
          quantity_of_ingredients: 1,
          instructions: 'add apples into pie crust, bake for 40 minutes'
        },
        {
          recipe_id: 2,
          ingredient_id: 1,
          quantity_of_ingredients: 1,
          instructions: 'take a pan and butter it down'
        },
        {
          recipe_id: 2,
          ingredient_id: 3,
          quantity_of_ingredients: 1,
          instructions: 'take pie crust and prepare for block of cheese'
        },
        {
          recipe_id: 2,
          ingredient_id: 4,
          quantity_of_ingredients: 1,
          instructions: 'add block of cream cheese to pie crust'
        },
      ]);
    });
};
