const {Pool} = require('pg');


const connectDB = async () => {
    const pool = new Pool({
        user : process.env.DB_USER,
        host : process.env.DB_HOST,
        database : process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
    });

    try {
        const client = await pool.connect();
        console.log("Connected to DB");
        return client;
    } catch (err){
        console.error(err);
    }
}

module.exports = connectDB;