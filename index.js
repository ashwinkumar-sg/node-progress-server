const { Pool } = require('pg');

// Set up your database connection information
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'firstDB',
  password: 'sqllearner',
  port: 5432,
});

async function queryDatabase() {
  try {
    // Connect to the database
    const client = await pool.connect();

    // Execute a query
    const res = await client.query('SELECT * from students');
    console.log(res.rows);  // Output the response from the database

    // Release the client back to the pool
    client.release();
  } catch (err) {
    console.error(err);
  }
}

// Call the query function
queryDatabase();
