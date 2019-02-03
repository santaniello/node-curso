module.exports = function(app){
    app.get('/',function(request, response){
        //renderizando uma pagina ejs....
        response.render('home/index');
    });
}    