const path = require('path');
const { Pool } = require('pg'); 
// const { DB_PASSWORD } = require(path.resolve(__dirname, '../../secrets.js'));

const PG_URI = `postgres://pvalafej:OQWLyL6isnOEO10-9Q4wCEPhHeMYF6-K@berry.db.elephantsql.com/pvalafej`;

//postgres://tekdpxxk:${DB_PASSWORD}@mahmud.db.elephantsql.com/tekdpxxk

const pool = new Pool({
    connectionString: PG_URI,
  });
  

