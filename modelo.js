const axios = require('axios')
const modelDatos = {
 getData: async (fecha) => {
    // console.log(req.query.date)
 return await axios.get(`https://api.nasa.gov/planetary/apod?api_key=MwilEZoo8mZ4OomiaieajgfPPoFQFHGxE9NhNLkD&date=${fecha}`)
 .then(data => data )
 .catch(err => {console.log(err); return err })
 
 },
 getDataInegi: async (estado) => {
    // console.log(req.query.date)
 return await axios.get(`https://gaia.inegi.org.mx/wscatgeo/mgee/${estado}`)
 .then(data => data )
 .catch(err => {console.log(err); return err })
 
 },

}
module.exports = modelDatos;