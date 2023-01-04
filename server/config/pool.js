const path = require('path');
const { Pool } = require('pg'); 
const { DB_PASSWORD } = require(path.resolve(__dirname, '../../secrets.js')); 
// const { DB_PASSWORD } = require(path.resolve(__dirname, '../../secrets.js'));

// const PG_URI = `postgres://pvalafej:OQWLyL6isnOEO10-9Q4wCEPhHeMYF6-K@berry.db.elephantsql.com/pvalafej`;

const PG_URI = `postgres://pvalafej:${DB_PASSWORD}@berry.db.elephantsql.com/pvalafej`;

const pool = new Pool({
    connectionString: PG_URI,
});

function query(text, params) {
    return pool.query(text, params); 
}

module.exports = {
    query, 
}
