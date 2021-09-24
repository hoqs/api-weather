const request = require('request')

const key = process.env.KEY

module.exports = {
    async index(response) {
     
     request("https://api.hgbrasil.com/weather", (err,res,body)=>{
     return response.send(body)
     
    })
      
    },

       async weatherGeo(req, response) {

        const {lat,lon} = req.body;
        request(`https://api.hgbrasil.com/weather?key=03f658fd&lat=${lat}&lon=${lon}&user_ip=remote`, (err,res,body)=>{
        return response.send(body)
       })
         
       },

       async weatherPerCity(req, response) {

        const {city} = req.params;
        request(`https://api.hgbrasil.com/weather?key=03f658fd&city_name=${city}`, (err,res,body)=>{
        return response.send(body)
       })
         
       }

    
  };