const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Users = require('../models/user')


router.get('/', (req, res)=> {
    res.render('index')
})

router.post('/adduser',(req, res)=> {    
    console.log(req.body);
    
    const user = new Users({
        name: req.body.name,
        email: req.body.email
    });
     user.save((err, doc, row)=> {

        if(err) {
            throw err
        }
        console.log('user added')
        console.log(doc.name);
        console.log(row);
        
        res.send({name:doc.name, email:doc.email})
     })

    
})



router.get('/allusers', (req, res)=> {
    Users.find({}, (err, doc, next)=> {
        if(err) {
            throw err
        }
        console.log(doc);
        res.send(doc)
        next;

        
    })



})




module.exports = router;