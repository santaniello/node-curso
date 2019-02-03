/**
 * Criando classes em JavaScript com prototype
 */
function NoticiaDAO(connection){
    // Por padrão no JS um atributo de uma classe começa sempre com _
    this._connection = connection;
}

NoticiaDAO.prototype.getNoticias   = function(callback){
    this._connection.query('SELECT * FROM noticias',callback);     
 }

NoticiaDAO.prototype.getNoticia  = function(callback){
    this._connection.query('SELECT * FROM noticias WHERE id_noticia = 1',callback);     
}

NoticiaDAO.prototype.salvarNoticia = function(noticia,callback){
    this._connection.query('insert into noticias set ?', noticia, callback)
}

module.exports=function(){    
    return NoticiaDAO;
}