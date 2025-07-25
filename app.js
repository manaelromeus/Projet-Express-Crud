const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const catalogueRoute = require('./routes/catalogue_route');

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/catalogue', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(()=> console.log("MongoDB Connecte"))
 .catch((err)=> console.log("echec de connexion : ", err))

 app.use('/catalogue', catalogueRoute);

 app.get('/', (req, res) =>{
    res.send("Bienvenu dans le catalogue de Produit");
 })
app.listen(PORT, ()=>{
    console.log(`Serveur lance sur http://localhost:${PORT}`)
});