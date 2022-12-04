const express = require('express');
const engine = require('ejs-mate');
const bodyParser = require('body-parser');
const request = require('request');
const { json } = require('body-parser');
const path = require('path');
const session = require('express-session');
const app = express().use(bodyParser.json());
var path = require('path');
app.use(express.urlencoded({extended:false}));

app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(express.json());
app.use( express.static(path.join(__dirname, 'public')) );

app.use(session({
    secret: "987f4bd6d4315c20b2ec70a46ae846d19d0ce563450c02c5b1bc71d5d580060b",
    saveUninitialized: true,
    resave: true,
  }));

/*app.use('/admi', require('./router/router-admi'));
app.use('/login', require('./router/router-login'));
app.use('/', require('./router/router-cliente'));
app.use('/webhook', require('./router/router-webhook'));*/
app.use('/nuevo', (req,res)=>{
  res.send("servidor creado");
});
const rutas = require('./controllers/index.controller-cliente');

app.use('/catalogo', (req,res)=>{
  console.log("pagina principal error");

});
  
app.use('/nuevo2', (req,res)=>{
  res.send("servidor creado 2222222");
});
app.use('/nuevo3', (req,res)=>{
  res.send("servidor creado 3333333333333");
});
const PORT =process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log("servidor iniciado...");
});