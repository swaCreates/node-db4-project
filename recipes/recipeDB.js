const db= require('../data/db_config.js');

module.exports= {
    getRecipes,
    getShoppingList,
    getInstructions,
};

function getRecipes(){
    return db('Recipes');
};

function getShoppingList(recipe_id){
    return db.select('ingredient', 'quantity_of_ingredients')
        .from('Recipe_instructions')
        .join('Ingredients', 'Ingredients.id', 'Recipe_instructions.ingredient_id')
        .where('Recipe_instructions.recipe_id', recipe_id);
}

function getInstructions(recipe_id){
    return db.select('ingredient', 'instructions')
        .from('Recipe_instructions')
        .join('Ingredients', 'Ingredients.id', 'Recipe_instructions.ingredient_id')
        .where('Recipe_instructions.recipe_id', recipe_id);
}