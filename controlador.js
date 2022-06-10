const modelDatos = require('./modelo');
const ctrlDatos = {
 findDatos: async (req, res) => {
    fecha = req.query.date;
    const data = await modelDatos.getData(fecha);
    // console.log("----->",data); //tiene muchas mas informacion que la que necesito
    console.log("----->",data.data);
    res.json(data.data); //la respuesta del servidor se genera aqui 
 },
 findDatosEstado: async (req, res) => {
    estado = req.params.estado;
    const data = await modelDatos.getDataInegi(estado);
    // console.log("----->",data); //tiene muchas mas informacion que la que necesito
    console.log("----->",data.data);
    res.json(data.data); //la respuesta del servidor se genera aqui 
 }
}
 module.exports = ctrlDatos
