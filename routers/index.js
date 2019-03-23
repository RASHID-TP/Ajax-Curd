const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Users = require('../models/user')


router.get('/', (req, res)=> {
    res.render('index')
})

router.post('/adduser',(req, res)=> {    
    const user = new Users({
        name: req.body.name,
        email: req.body.email
    });
     user.save()
         .then(()=> {
             console.log('user added')
             res.redirect('/')
            })
         .catch(()=> console.log('error'))
    
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