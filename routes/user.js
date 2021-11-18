const express = require('express')

const router = express.Router();

router.get('/signin', async (req,res) => {
    res.render('pages/signin')
})

router.get('/register', (req,res) => {
    res.render('pages/register')
})

router.get('/logout', (req, res) => {
    req.session.isLoggedIn = false;
    res.redirect('/');
})

router.post('/login', (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    //apakah user ini terdaftar
    if (email == "ha@hi.com" && password == "12345678"){
        req.session.isLoggedIn = true;
        res.redirect('/');
    }
    else {
        res.render('pages/signin');
    }
})

module.exports = router;