const axios = require('axios');
const self = {} 
const authorSignature = { 'name': 'Maria Florencia',
                          'surname':'Busatto',}

const apiMeli = 'https://api.mercadolibre.com/sites/MLA/search?q=:query'
const apiId = 'https://api.mercadolibre.com/items/'

let description = {}

self.showResults = function (req, res, next){
   
    axios 
    .get('{apiMeli}')
    .then(res => response.data.showResults)
    .then(data =>  {
        
        var searchResults =  {
                'author': authorSignature,
                'categories': 
                'items': [
                    {
                     "id": 
                     "title": 
                     "price": {
                       "currency": 
                       "amount": 
                       "decimals": 
                         },
                    "picture": 
                    "condition": 
                    "free_shipping": 
                })
        }
        res.json(searchResults)
    })
    .catch (error => res.status(500).send('Internal Server Error'))

}

self.showItem = function(req, res, next){

    axios 
        .get('{apiId}')
        .then(res => response.data.showItem)
        .then(data => {

            var item =  {
                'author': authorSignature,
                'item':  {
                    "id": 
                    "title": 
                    "price": {
                        "currency": 
                        "amount": 
                        "decimals": 
                         },
                    "picture": 
                    "condition": 
                    "free_shipping": 
                    "sold_quantity":
                    "description": 
                }
                }
            res.json(item)
        })
        .catch (error => res.status(500).send('Internal Server Error'))
    };

self.showDescription = function(req, res, next){

    axios 
        .get('{apiId}/description')
        .then(res => response.data)
        .then(data => {res.json(data.showDescription)})
        .catch (error => res.status(500).send('Internal Server Error'))
    };

module.exports = self;