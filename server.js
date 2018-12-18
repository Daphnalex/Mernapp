const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//on définit notre objet express nommé app
const app = express();

var urlencodedParser = bodyParser.urlencoded({
    extended: true
});

//on définit les middlewares utilisés
app.use(urlencodedParser);
app.use(bodyParser.json());

//définition des CORS
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//Définition des routes
app.get('/hello', (req,res) => {
    res.json("Hello World");
});

//Définition et mise en place du port d'écoute
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Listenning to port ${PORT}`)
});