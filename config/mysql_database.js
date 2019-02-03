var mysql = require('mysql'); 
/** 
 *  evita que seja criada uma nova conexão toda vez que 
 *   este modulo for carregado...
*/
var connMysql = function(){
    console.log('Chamouuuu');
    return mysql.createConnection({
        host : 'localhost',
        user: 'root',
        password:'s10121426',
        database:'curso_node',
        port:3307
    }); 
}

module.exports=function(){
    console.log("Módulo DB CArregado");
    return connMysql;
}
 