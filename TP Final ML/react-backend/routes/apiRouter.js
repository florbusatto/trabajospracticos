var express = require('express');
var router = express.Router();
const axios = require('axios');
var apiController = require('../controllers/apiController');

router.get('/items', apiController.showResults)   
router.get('/items/:id', apiController.showItem)  
router.get('/items/description', apiController.showDescription)
    
module.exports = router;
