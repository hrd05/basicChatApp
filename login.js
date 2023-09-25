const express = require('express');


const router = express.Router();



router.get("/login", (req, res, next)=>{
    res.send(`<form method="POST" 
    onSubmit="localStorage.setItem('username',document.getElementById('username').value)">
    <label for="username">username</label>
    <input type="text" name="username" id="username"><button>LOGIN</button></form>`);
})

router.post("/login", (req, res, next)=>{
    res.redirect('/');
})

module.exports = router;

