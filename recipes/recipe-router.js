const express= require('express');
const db= require('./recipeDB.js');

const router= express.Router();

router.get('/', async (req, res) => {
    try {
        const recipes= await db.getRecipes();
        res.json(recipes);
    } catch (err) {
        console.log('Error getting recipes:', err);
        next(err);
    };
});

module.exports= router;