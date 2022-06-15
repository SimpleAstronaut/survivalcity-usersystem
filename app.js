/*
 * SurvivalCity UserSystem
 * v2.0.0
 * SimpleAstronaut 2022-6-13
 */

const express = require('express');
const { execFileSync } = require('child_process');
const exStatic = require("express-static");

let app = express();

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.get('/', function(req, res){
    res.sendFile(__dirname+"/public"+"/index.html");
    console.log("[INFO]["+Date()+"]["+req.ip.match(/\d+\.\d+\.\d+\.\d+/)+"]:Main page require");
})

app.get('/get', function(req, res){
    res.send('test');
    console.log(req);
})

app.get('/login', function(req, res){
    res.sendFile(__dirname+"/public"+"/login.html");
    console.log("[INFO]["+Date()+"]["+req.ip.match(/\d+\.\d+\.\d+\.\d+/)+"]:Login page require")
})

app.get('/signup', function(req, res){
    res.sendFile(__dirname+"/public"+"/signup.html")
    console.log("[INFO]["+Date()+"]["+req.ip.match(/\d+\.\d+\.\d+\.\d+/)+"]:SignUp page require")
})

app.use(exStatic('./public'));

app.listen(9000, function(){
    console.log("=============== Survival City UserSystem ================");
    console.log("Version 2.0.1_beta");
    console.log("Powered by SimpleAstronaut from SimpleDesign");
    console.log("2022-6-13");
    console.log("=========================================================")
})