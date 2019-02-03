module.exports.formulario_inclusao_noticia = function(application,request,response){
    response.render('admin/form_add_noticia',{validacao: false, noticia: {}});
}

module.exports.noticias_salvar = function(application,request,response){                 
    let noticia = request.body; // usando bodyParser        
    let hasErrors = validate(request);        
    if(hasErrors){
        response.render('admin/form_add_noticia',{validacao: hasErrors, noticia: noticia});
        return;
    }
    var connection = application.config.mysql_database();        
    var noticiasModel = new application.app.models.NoticiaDAO(connection);     
    noticiasModel.salvarNoticia(noticia,function(error,result){
        response.redirect('/noticias');
    });        
}

function validate(request){
    request.assert('titulo','Titulo é obrigatório').notEmpty();
    request.assert('resumo','Resumo é obrigatório').notEmpty();
    request.assert('noticia','Resumo deve conter entre 10 e 100 caractesres!').len(10,100);
    request.assert('autor','Autor é obrigatório').notEmpty();
    request.assert('data_noticia','Data é obrigatório').notEmpty();
    request.assert('noticia','Noticia é obrigatório').notEmpty();
    return request.validationErrors();
}