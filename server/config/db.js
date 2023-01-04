//restructure to SQL

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

const pool = require('./pool.js'); 

const obj = {};

obj.readUser = async (id) => {
  try {
    const sql = `SELECT * FROM Cards WHERE _id=$1;`;
    const data = await pool.query(sql, [id]);
    return data.rows[0];

  } catch (err) {
    throw `In db.js:obj.readUser: ${err.message}`;
  }
}