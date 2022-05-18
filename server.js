const express = require('express');
let app = express();
require('./database');
let PORT = process.env.PORT || 3000;
app.use ('/assets',  express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.set ('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel="stylesdheet" href="/assets/style.css">
    <title>Document</title> </head>
    <body> <h1>Hola mundo </h1>
    </body></html>`);
});

app.get('/person/:id', (req, res) =>{
    res.render('person', {ID: req.params.id, MESS: req.query.message, TIMES: req.query.times });
});

app.get('/student', (req, res) => { //Crea la ruta /student con el metodo get
    res.render('index');  //Cuando se introduza la ruta se renderiza el archivo "index.ejs"
})

app.post('/student', (req, res) => { //Crea la ruta /student con el metodo post
    res.send(`First Name es: ${req.body.fname}, Last Name es: ${req.body.lname}`); // En esta ruta se envia la información de first name y last name 
});

app.post('/personjson', express.json({type: '*/*'}), (req, res) => {
    console.log('El objeto contiene:' , (req.body));
    console.log('Nombre:', req.body.firstname);
    console.log('Apellido', req.body.lastname);
})
app.listen(PORT);