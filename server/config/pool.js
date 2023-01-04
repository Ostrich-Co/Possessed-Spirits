const path = require('path');
const { Pool } = require('pg'); 
const { DB_PASSWORD } = require(path.resolve(__dirname, '../../secrets.js')); 

// const PG_URI = `postgres://pvalafej:OQWLyL6isnOEO10-9Q4wCEPhHeMYF6-K@berry.db.elephantsql.com/pvalafej`;

const PG_URI = `postgres://pvalafej:${DB_PASSWORD}@berry.db.elephantsql.com/pvalafej`;

const pool = new Pool({
    connectionString: PG_URI,
});


module.exports = {
    query: (text, params, callback) => {
        // console.log('checking the pool')
        // console.log(text, params)

        // heping to debug the sql query 
        //   const sqlCommand = text.replace(/\$(\d+)/g, (match, index) => {
        //     return typeof params[index - 1] === 'string'
        //       ? `\'${params[index - 1]}\'`
        //       : params[index - 1];
        //   });
        //   console.log('running sql command: ', sqlCommand);
    
        // return result of executing sql command
        return pool.query(text, params, callback);
    },
  };
