var express = require('express');
var router = express.Router();

var paises = { 
			  "paises":[
			  { pais: 'Argentina', ref:'ARG'},	
			  { pais: 'Bèlgica', ref:'BEL'},	
			  { pais: 'Canadà', ref:'CAN'},
			  { pais: 'España', ref:'ESP'},
			  { pais: 'Estados Unidos', ref:'USA'},	
			  { pais: 'Inglaterra', ref:'ING'},		
			  { pais: 'Italia', ref:'ITA'},
			  { pais: 'Japòn', ref:'JAP'},
			  ]	
			 } 

router.get('/', function(req, res, next) {

  res.send( JSON.stringify(paises));
});

module.exports = router;
















	




