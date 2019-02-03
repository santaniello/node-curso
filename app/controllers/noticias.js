module.exports.noticias = function(application,request,response){
    var connection = application.config.mysql_database();
    // Instância uma classe
    var noticiasModel = new application.app.models.NoticiaDAO(connection);
    noticiasModel.getNoticias(function(error, result){                  
        // enviando o resultado da consulta para a pagina html
        response.render('noticias/noticias',{noticias : result});
    });    
}

module.exports.noticia = function(application,request,response){
    var connection = application.config.mysql_database();
    var noticiasModel = new application.app.models.NoticiaDAO(connection);      
    noticiasModel.getNoticia(function(error, result){             
        // enviando o resultado da consulta para a pagina html
        response.render('noticias/noticia',{noticia : result});
    });
}

