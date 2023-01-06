const path = require('path');
const { Pool, /* Client */ } = require('pg'); 
const { DB_PASSWORD } = require(path.resolve(__dirname, '../../secrets.js')); 

/* NEW CHANGES: VARIABLE TO CONNECT TO DB
CREATE SECRETS.JS FILE WHERE YOU WILL STORE YOUR ELEPHANT SQL PASSWORD */
const PG_URI = `postgres://pvalafej:${DB_PASSWORD}@berry.db.elephantsql.com/pvalafej`;

/* USE Pool FROM pg TO CREATE AND MAINTAIN A CONNECTION FOR REQUESTS TO DB */
const pool = new Pool({
    connectionString: PG_URI,
});


/* NEW CHANGES: CONTINUED -> CREATING THE CONNECTION WITH DATABASE TO MIGRATE FROM DATA TO SQL DB-
- ONLY NEEDED TO BE RUN ONCE TO POPLULATE SQL DATABASE (WILL CREATE DUPLICATES IF RUN MORE THAN ONCE!)
 */
/* Used this to import from cocktails.js */
/* const client = new Client({
    host: 'berry.db.elephantsql.com',
    user: 'pvalafej',
    password: 'OQWLyL6isnOEO10-9Q4wCEPhHeMYF6-K',
    database: 'pvalafej',
    port: 5432,
});
client.connect();
const insertCocktail = async (obj) => {
    try {
        await client.query(
            `INSERT INTO "cocktails" (name, liquor, ingredients, garnish, directions)
            VALUES ($1, $2, $3, $4, $5)`, [obj.name, JSON.stringify(obj.liquor), JSON.stringify(obj.ingredients), obj.garnish, JSON.stringify(obj.directions)]
        );
        return true;
    } catch (error) {
    console.error(error.stack);
    return false;
    } finally {
    // await client.end(); // closes connection - NO NEED TO USE IT 
    }
} */


module.exports = {
    /* USED TO IMPORT insertCoctail FROM cocktails.js TO POPULATE SQL DB */
    /* insertCocktail, */

    query: (text, params, callback) => {
        // console.log('checking the pool')
        // console.log(text, params)
    
        // return result of executing sql command
        return pool.query(text, params, callback);
    },
  };



/* FROM HERE DOWN - HOW TO USE THE TERMINAL TO ACCESS SQL DATABASE */
  
/* CONNECTING TO SQL DB IN TERMINAL: */
// 1. PASTE NEXT LINE INTO TERMINAL
    // psql -h berry.db.elephantsql.com -U pvalafej -d pvalafej

// 2. PASTE NEXT LINE INTO TERMINAL (IT WILL REMAIN HIDDEN BECAUSE IT IS A PASSWORD)
    // OQWLyL6isnOEO10-9Q4wCEPhHeMYF6-K

// -> SQL COMMAND TO GET RID OF DUPLICATES
// DELETE FROM cocktails WHERE ID NOT IN (   SELECT MAX(ID) AS MaxRecordID FROM cocktails  GROUP BY name); 
// DELETE FROM Customers WHERE Name='ALINA TEST';