const express = require("express"); //importar express
const bodyParser = require("body-parser");
const app = express(); //crear al servidor
const port = process.env.PORT || 3000;

const misRutas = require("./routes/rutas");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', misRutas);
app.use(cors());
app.use(express.static(process.cwd()+"/my-app/dist/examen-final/"));

app.get('/', (req,res) => {
    res.sendFile(process.cwd()+"/my-app/dist/examen-final/index.html")
  });

app.listen(port, () => {
    console.log(`hola servidor ejecucion en http://localhost:${port}`);
})
