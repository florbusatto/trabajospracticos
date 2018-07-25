var express = require('express');
var router = express.Router();

//Constante Header//

const header = [
    {detalle: 'Homero Jay Simpson', referencia: name},
    {detalle: 'Nuclear safety Inspector', referencia: description},
    {detalle: 'GitHub', referencia: redes}, 
    {detalle: 'LinkedIn', referencia: redes},   
    {detalle: 'Instagram', referencia: redes},  
    {detalle: 'Facebook', referencia: redes},
]

router.get('/header', function(req, res, next) {
 res.json(header);
});

//Constante Card//

const card = [
    {info: 'Hello & Welcome', ref: saludo},
    {info: 'Homero Jay Simpson', ref: nombre},
    {info: 'Nuclear safety Inspector', ref:bio},    
    {info: '39', ref: edad},    
    {info: '742 Evergreen Terrace', ref: dire}, 
    {info: 'homerjay_simpson@hotmail.com', ref: mail},  
    {info: '555-7334', ref: tel},   
    {info: 'github/florbusatto', ref: git},
]

router.get('/card', function(req, res, next) {
 res.json(card);
});

//Constante Education//

const education = [
    {educacion: 'Ada ITW', carrera: Front-end },
    {educacion: 'Universidad del Museo Social Argentino', carrera:Abogacìa},
    {educacion: 'Universidad de Buenos Aires', carrera:Asistente de RRHH }, 
    {},{},  
]

router.get('/education', function(req, res, next) {
 res.json(education);
});

//Constante Habilidades//

const skills = [
    {nombre: 'Donut Eater', porcentaje: 100},
    {nombre: 'Back-End Development', porcentaje: 76}
]

router.get('/skills', function(req, res, next) {
 res.json(skills)
});

//Constante Repositorios//

const repositorios = [
    {}, {}
]

router.get('/repositorios', function (req, res) {
    res.json(repositorios)
})

module.exports = router;