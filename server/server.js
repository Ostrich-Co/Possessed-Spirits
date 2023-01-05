const express = require('express');
/* A middleware that allows us to make requests from a different domain. */
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8080;
const connectDB = require('./config/db');

/* PREVIOUSLY USED TO CONNECT TO MONGO DB */
// connectDB();
// app.use('/', require('./routes/cocktailRoutes'));

/* NEW CHANGES */ 
const apiRouter = require('./routes/apiRouter.js'); 


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



/* NEW CHANGES: IMPORT COCKTAILS.JS FILE TO MIGRATE THE DATA TO SQL DB 
- ONLY NEEDED TO BE RUN ONCE TO POPLULATE SQL DATABASE (WILL CREATE DUPLICATES IF RUN MORE THAN ONCE!)*/
/* const cocktailJSON = require('../cocktails');
const { insertCocktail } = require('./config/pool')
// console.log(cocktailJSON);
cocktailJSON.forEach(element => {
  console.log(element);
  insertCocktail(element);
}); */


/* NEW CHANGES: */
app.get('/', (req, res) => {
  res.status(200).json('GET request received');  
}); 

/* ROUTING ALL REQUESTS TO '/api' END POINT TO OUR apiRouter FILE */
app.use('/api', apiRouter); 

/* EXPRESS ERROR HANDLER */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error', 
    status: 400, 
    message: { err: ' An error occured' }, 
  }
  const errorObj = Object.assign({}, defaultErr, err); 
  return res.status(errorObj.status).json(errorObj); 
})


/* START SERVER */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
