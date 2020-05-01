
exports.up = function(knex) {
   return knex.schema
   .createTable('Recipes', tbl => {
        tbl.increments();
        tbl.text('recipe_name', 128).notNullable().unique();
   })
   .createTable('Ingredients', tbl => {
        tbl.increments();
        tbl.text('ingredient', 128).notNullable().unique();
   })
   .createTable('Recipe_instructions', tbl => {
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('Recipes');
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('Ingredients');
        tbl.float('quantity_of_ingredients');
        tbl.text('instructions').notNullable();
        tbl.primary(['ingredient_id', 'recipe_id']);
   });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('Recipe_instructions')
    .dropTableIfExists('Ingredients')
    .dropTableIfExists('Recipes');
};
