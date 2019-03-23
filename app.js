const express = require('express')
const mongoose = require('mongoose');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');



const app = express();

// Mongodb setup
mongoose.connect('mongodb://localhost:27017/ajaxCurd', {useNewUrlParser: true})
    .then(()=> console.log('Mongo db connected'))
    .catch((err)=> console.log(err))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))

// parse application/json
app.use(bodyParser.json())



// view engine setup
app.engine( 'hbs', hbs( { 
    extname: 'hbs', 
    defaultLayout: 'main', 
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
  } ) );
app.set( 'view engine', 'hbs' );


app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require('./routers/index'))
app.use('/users', require('./routers/users'))

//console.log(req.body);

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> console.log(`server listening on port ${PORT}... `));