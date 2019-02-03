/**
 * Criando classes em JavaScript com prototype
 */
function Noticias(connection){
    // Por padrão no JS um atributo de uma classe começa sempre com _
    this._connection = connection;
}

Noticias.prototype.getNoticias   = function(callback){
    this._connection.query('SELECT * FROM noticias',callback);     
 }

Noticias.prototype.getNoticia  = function(callback){
    this._connection.query('SELECT * FROM noticias WHERE id_noticia = 1',callback);     
}

Noticias.prototype.salvarNoticia = function(noticia,callback){
    this._connection.query('insert into noticias set ?', noticia, callback)
}

module.exports=function(){    
    return Noticias;
}