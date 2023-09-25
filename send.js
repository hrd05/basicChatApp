const express = require('express');
const fs = require('fs');

const router = express.Router();


router.get("/", (req, res, next)=>{
    fs.readFile("messages.txt", {encoding: "utf-8"}, (err,data)=>{
        if(err){
            console.log(err);
            data = 'no chat exists'
        }
        res.send(`${data}
        <form action="/" method="POST" 
        onSubmit="document.getElementById('username').value=localStorage.getItem('username')">
        <input type="text" id="message" name="message" placeholder="message">
        <input type="hidden" id="username" name="username"><button type="submit">SEND</button></form>`);
    });
   
});

router.post("/", (req, res, next)=>{
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("messages.txt", ` ${req.body.username}: ${req.body.message} `, {flag: 'a'} , (err)=>{
        err? console.log(err) : res.redirect("/");
    })
})

module.exports = router;
