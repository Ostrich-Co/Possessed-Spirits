const db = require('../config/db.js'); 
const express = require('express'); 
const { router } = require('../server.js');
const Router = express.Router(); 

router.get('/users', async (req, res, next) => {
    try {
        const row = await db.readUser();
        res.status(200).json(row);
      } catch (err) {
        next({
          log: 'error getting users',
          status: 500,
          message: { err: err },
        });
      }
}); 