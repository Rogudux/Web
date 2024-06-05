const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const {connection} = require ('../config.db');

const getProductos = () =>{
    connection.query (
        "SELECT * FROM tb_productos", 
        (error,result)=> {
            if(error) throw error;
            response.status(200).json(result);  
        }
    );
};

app.route('/productos').get(getProductos);

module.exports = app;