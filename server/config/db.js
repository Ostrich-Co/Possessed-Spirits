/* FIRST SECTION OF COMMENTED CODE WAS HOW APP PREVIOUSLY CONNECTED TO THE MONGO DB */
// const mongoose = require('mongoose');

// //Connect to our MongoDB
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       dbName: 'Goblin',
//     });
//     console.log(`Mongo DB Connected: ${conn.connection.host}`.cyan);
//   } catch (error) {
//     console.log(`Error: ${error.message}`.red.underline.bold);
//     //if we error, exit entire process
//     process.exit(1);
//   }
// };

// module.exports = connectDB;



/* NEW UPDATES TO CONNECT WITH SQL DB */

const pool = require('./pool.js'); 

const obj = {};

/* SQL QUERY READ ALL THE COCKTAILS */
obj.readCocktails = async (id) => {
  try {
    // CREATE SQL QUERY TO PREVIEW THE TABLE WITH COCKTAILS
    const sql = `SELECT * FROM cocktails;`;
    console.log('getting the sql query', sql)

    // execute database query
    const data = await pool.query(sql);
    // console.log('getting the data', data.rows)

    // show all the data from the table 
    return data.rows;
  } catch (err) {
    throw `In db.js:obj.readCocktails: ${err.message}`;
  }
}

/* INSERT REQUEST TO CREATE A NEW COCKTAILS */
obj.createCocktail = async (args) => {
  try {
    /* CREATE AN ARRAY WITH THE DATA WE RECEIVED FROM args (args COMES TO US AS AN OBJECT) */
    const arr = [
      JSON.stringify(args['name']),
      JSON.stringify(args['liquor']),
      JSON.stringify(args['ingredients']),
      JSON.stringify(args['garnish']),
      JSON.stringify(args['directions']),
    ];

    /* CREATE A SQL STRING FOR THE QUERY */
    /* (THE VALUES PLACEHOLDERS WILL BE FILLED IN LATER BY THE 2ND ARG (arr) OF THE QUERY await pool.query(sql, arr) ) */
    const sql = `INSERT INTO cocktails
    (name, liquor, ingredients, garnish, directions)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;`;

    /* EXECUTE THE QUERY */
    const data = await pool.query(sql, arr);
    console.log('data', data); 

    return data.rows[0];

  } catch (err) {
    throw `In db.js:obj.createCocktail: ${err.message}`;
  }
}

obj.deleteCocktail = async (args) => {
  try {
    const sql = `DELETE FROM cocktails
    WHERE id=$1
    RETURNING *;`;

    const data = await pool.query(sql, [args]);
    console.log('data: ', data);

    return data.rows[0];

  } catch (err) {
    throw `In db.js:obj.deleteCocktail: ${err.message}`;
  }
}

module.exports = obj;