module.exports = function(application){    
    application.get('/formulario_inclusao_noticia',function(request, response){
        response.render('admin/form_add_noticia');
    });
    application.post('/noticias/salvar',function(request, response){                
        let noticia = request.body; // usando bodyParser
        var connection = application.config.mysql_database();
        var noticiasModel = new application.app.models.noticiasModel(connection);
        noticiasModel.salvarNoticia(noticia,function(error,result){
            response.redirect('/noticias');
        });        
    });
}    
