var express = require('express');
var router = express.Router();

var preguntas = {
"preguntas":[
    {"pregunta":"1- ¿Lenguaje de programación preferido?", 
     "opcion1":"JavaScript", 
     "opcion2": "Java", 
     "opcion3":"C++",	
     "name": "lenguajes" 	  
    },
    {"pregunta":"2- ¿Sistema operativo preferido?", 
     "opcion1":"Windows", 
     "opcion2": "Linux", 
     "opcion3":"Solaris",	
      "name": "sistema"	
    },
]
}

router.get('/', function(req, res, next) {
  res.send(JSON.stringify(preguntas));
});

module.exports = router;