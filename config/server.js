// Importando bibliotecas 
let express = require('express');
let app = express();
let consign = require('consign');
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');

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
 * Aqui parametrizando o body-parser que será responsavel por parsear os dados
 * que vem do formulário.
 * O Body Parser funciona como um middleware ou seja ele atua entre os nossos
 * objetos de requisição e resposta.
 * 
 * OBS: Todo middleware deve estar configurado antes de fazermos o carregamento dos nossos
 * módulos...
 *
 *  https://pt.stackoverflow.com/questions/64507/o-que-s%C3%A3o-middlewares-em-nodejs
 * 
 */
app.use(bodyParser.urlencoded({
    extended:true 
}));  // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json

/** 
 * Registrando o express-validator (OBS: Assim como o Body Parser, 
 * ele também é um middleware)...
 */
app.use(expressValidator());
// Passando a localização dos arquivos estáticos para o node
app.use(express.static('./app/public'));

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
         .then('app/controllers')
         .into(app);


module.exports = app;