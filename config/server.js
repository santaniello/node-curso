// Importando bibliotecas 
let express = require('express');
let app = express();
let consign = require('consign');

/**
 *  Aqui integramos o EJS com o Express 
 *  (O EJS será o nosso motor de renderização de Views - Tipo o JSP do Java)...
 */  
app.set('view engine','ejs');
// Apontando aonde estão as views...
app.set('views','./app/views'); 

// Subindo o servidor na porta 3000
app.listen(3000,function(){
  console.log("Servidor rodando com Express");
});


/**
 * Responsável por fazer o autoload dos nossos módulos
 * No exemplo abaixo, estamos fazendo o autoload das nossas 
 * rotas e do módulo do banco de dados para que assim, não precisemos
 * ficar dando require em todo lugar para pegar a conexão com 
 * o banco de dados...
 * 
 */
consign().include('app/routes') // carrega rotas
         .then('config/mysql_database.js') // carrega as confs (poderia ser diversas outras coisas tais como: controllers e etc...)
         .then('app/models')
         .into(app);


module.exports = app;