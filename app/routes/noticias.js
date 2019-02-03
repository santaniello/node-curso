module.exports = function(app){    
    app.get('/noticias',function(request, response){
        var connection = app.config.mysql_database();
        var noticiasModel = app.app.models.noticiasModel;
        noticiasModel.getNoticias(connection,function(error, result){                  
            // enviando o resultado da consulta para a pagina html
            response.render('noticias/noticias',{noticias : result});
        });        
    });
}    