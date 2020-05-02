const express= require('express');
const db= require('./recipeDB.js');

const router= express.Router();

router.get('/', async (req, res, next) => {
    try {
        const recipes= await db.getRecipes();
        res.json(recipes);
    } catch (err) {
        console.log('Error getting recipes:', err);
        next(err);
    };
});

router.get('/:id', async (req, res, next) => {
    try {
        const shoppingList= await db.getShoppingList(req.params.id);
        res.json(shoppingList);
    } catch (err) {
        console.log('Error getting shoppingList:', err);
        next(err);
    };
});

router.get('/:id/instructions', async (req, res, next) => {
    try {
        const instructions= await db.getInstructions(req.params.id);
        res.json(instructions);
    } catch (err) {
        console.log('Error getting instructions:', err);
        next(err);
    }
});



module.exports= router;