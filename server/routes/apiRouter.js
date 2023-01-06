const db = require('../config/db.js'); 
const express = require('express'); 
const router = express.Router();

/* GET REQUEST FOR ALL THE COCKTAILS: 
USE GET REQUEST IN POSTMAN TO http://localhost:8080/api/cocktails */
router.get('/cocktails', async (req, res, next) => {
    try {
        console.log('trying to get cocktails')
        const row = await db.readCocktails();
        res.status(200).json(row);

      } catch (err) {
        next({
          log: 'error getting cocktails',
          status: 500,
          message: { err: err },
        });
      }
}); 

/* POST REQUEST TO ADD A NEW COCKTAIL 
USE POST REQUEST IN POSTMAN TO http://localhost:8080/api/cocktails */
router.post('/cocktails', async (req, res, next) => {
  try {
    const { name, liquor, ingredients, garnish, directions } = req.body;
    const data = { name, liquor, ingredients, garnish, directions };

    console.log('creating data: ', data);
    const row = await db.createCocktail(data);
    res.status(200).json(row);

  } catch (err) {
    next({
      log: 'error creating cocktail',
      status: 500,
      message: { err: err },
    });
  }
});

router.delete('/cocktails/:id', async (req, res, next) => {
  try {
    console.log('req.params.id: ', req.params['id']);
    const { id } = req.params;
    const deletedRow = await db.deleteCocktail(id);
    if (!deletedRow) throw `${id}, id of cocktail to be deleted is falsy`;
    res.status(200).json(deletedRow);
    // return next();
  } catch(err) {
    next({
      log: 'error deleting cocktail',
      status: 500,
      message: { err: err },
    })
  }
})

module.exports = router;