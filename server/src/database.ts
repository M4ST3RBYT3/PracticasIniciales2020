//Coleccion y uso
import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database); //crear la conexion
//PARA HACER CONSULTAS
pool.get("getConnection")
    .then(connection =>{
        pool
    });