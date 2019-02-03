let app = require('./config/server');
/**
 * Não precisamos mais importar rota por rota pois estamos
 * fazendo o autoload com cosign no módulo server
 * require('./app/routes/noticias')(app);
 * require('./app/routes/form_noticia')(app);
 * require('./app/routes/home')(app);
 */

/** 
 *  Importando um módulo criado por nós e executando
 *  a função de retorno... 
 */
let msg = require('./mod_teste')();

console.log(msg);




