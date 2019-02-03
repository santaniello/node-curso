module.exports.index=function(application,request,response){
    var connection = application.config.mysql_database();        
    var noticiasModel = new application.app.models.NoticiaDAO(connection);
    noticiasModel.getUltimasNoticias(5, function(error,result){       
        response.render('home/index', {noticias: result});  
    });    
}