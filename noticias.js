// Importando a lib http para trabalhar com requisições...
let http = require('http');

// Iniciando um servidor HTTP...
let server = http.createServer(function(request, response){    
    let categoria = request.url;

    if(categoria == '/tecnologia' ){
        response.end("<html><Notícias de Tecnologia</body></html>");
    }else if(categoria == '/moda'){
        response.end("<html><body>Portal de Moda</body></html>");
    }else if(categoria == '/beleza'){
        response.end("<html><body>Portal de Beleza</body></html>");
    }else{
        response.end("<html><body>Portal de Notícias</body></html>");
    }   
});

// Servidor está escutando na porta 3000...
server.listen(3000);




