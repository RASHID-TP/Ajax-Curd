const express = require('express')
const mongoose = require('mongoose');
const hbs = require('express-handlebars');



const app = express();

mongoose.connect('mongodb://localhost:27017/ajaxCurd', {useNewUrlParser: true})
    .then(()=> console.log('Mongo db connected'))
    .catch((err)=> console.log(err))



// view engine setup
app.engine( 'hbs', hbs( { 
    extname: 'hbs', 
    defaultLayout: 'main', 
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
  } ) );
  

  app.set( 'view engine', 'hbs' );

app.use('/', require('./routers/index'))
app.use('/users', require('./routers/users'))


const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> console.log(`server listening on port ${PORT}... `));