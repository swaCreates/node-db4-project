const db= require('../data/db_config.js');

module.exports= {
    getRecipes,
};

function getRecipes(){
    return db('Recipes');
};