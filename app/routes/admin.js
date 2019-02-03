module.exports = function(application){    
    application.get('/formulario_inclusao_noticia',function(request, response){
        application.app.controllers.admin.formulario_inclusao_noticia(application,request, response);
        response.render('admin/form_add_noticia',{validacao: false, noticia: {}});
    });
    application.post('/noticias/salvar',function(request, response){                
        application.app.controllers.admin.noticias_salvar(application,request, response);  
    });
}    


