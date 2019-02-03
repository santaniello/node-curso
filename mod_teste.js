/** Vamos exportar a váriavel msg para que outras partes do meu projeto que importarem
 *  este  módulo tenham acesso a mesma...
 * 
 *  Um módulo pode exportar: String, Objeto, função, boolean... 
 */
//module.exports = msg;

module.exports = function(){
    let msg = 'Este módulo contéma apenas uma String';
    return msg;
}