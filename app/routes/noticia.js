module.exports = function(app){    
    app.get('/noticia',function(request, response){
        var connection = app.config.mysql_database();
        var noticiasModel = app.app.models.noticiasModel;      
        noticiasModel.getNoticia(connection,function(error, result){             
            // enviando o resultado da consulta para a pagina html
            response.render('noticias/noticia',{noticia : result});
        });
    });
}    