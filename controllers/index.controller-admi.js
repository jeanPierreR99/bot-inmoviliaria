const { Pool } = require('pg');
const multer = require('multer');
const path = require('path');
const fetch = require('node-fetch');

const pool = new Pool({
    user: "tvjohsqnthxeko",
    host: "ec2-3-217-251-77.compute-1.amazonaws.com",
    database: "d16nt5ibvkp7b8",
    password: "3573d1dbb8b0bd0d951e3e74b26e104bdadc1a9f58701de359e0f261a821f624",
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    }
});

const plantilla = (req, res) => {

   
        pool.query('select *from table_bot', (err, customers_bot) => {
            if (err) {
                res.json(err);
                console.log("error de consulta")
            } else {
                res.send(customers_bot);
                console.log("consulta hecha")
            }
        });
   

};

module.exports = {
    plantilla
}