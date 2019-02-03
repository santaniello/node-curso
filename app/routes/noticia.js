module.exports = function(application){    
    application.get('/noticia',function(request, response){
        var connection = application.config.mysql_database();
        var noticiasModel = new application.app.models.noticiasModel(connection);      
        noticiasModel.getNoticia(function(error, result){             
            // enviando o resultado da consulta para a pagina html
            response.render('noticias/noticia',{noticia : result});
        });
    });
}    