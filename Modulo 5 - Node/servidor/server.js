var http = require('http');
var puerto = 8080;

var miModulo = require('./modulos/proceso');

var url = require('url');

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});

  var q = url.parse(req.url, true).query;
  
  let m =  q.month;
  let d = q.day;

  let respuesta = miModulo.signo(m,d);
  
  res.end(respuesta);

}).listen(puerto, function () {

  console.log( "Escuchando en el puerto " + puerto );

});
