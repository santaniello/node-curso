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

NoticiaDAO.prototype.getNoticia  = function(idNoticia,callback){
    this._connection.query(`SELECT 
                               * 
                            FROM noticias 
                            WHERE id_noticia = ${idNoticia.idNoticia}`,callback);     
}

NoticiaDAO.prototype.salvarNoticia = function(noticia,callback){
    this._connection.query(`INSERT INTO noticias SET ?`, noticia, callback);
}

NoticiaDAO.prototype.getUltimasNoticias = function(qtd,callback){
    this._connection.query(`SELECT 
                               * 
                            FROM noticias 
                            ORDER BY data_criacao 
                            DESC LIMIT `+ qtd , callback);
}




module.exports=function(){    
    return NoticiaDAO;
}