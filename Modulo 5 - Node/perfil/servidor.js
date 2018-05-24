var http = require ('http');
var fs= require ('fs');

http.createServer(function (req, res){	
    
	fs.readFile ('html/index.html', function (err,data){	
		res.write(200, {'Content-Type': 'text/html'});		
		res.write(data);		
		res.end();
    })
	

}).listen('8080',function(){

   console.log("Escuchando en el puerto 8080");		

});