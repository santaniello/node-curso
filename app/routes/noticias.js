module.exports = function(application){    
    application.get('/noticias',function(request, response){
        var connection = application.config.mysql_database();
        // Instância uma classe
        var noticiasModel = new application.app.models.noticiasModel(connection);
        noticiasModel.getNoticias(function(error, result){                  
            // enviando o resultado da consulta para a pagina html
            response.render('noticias/noticias',{noticias : result});
        });        
    });
}    