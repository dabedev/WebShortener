const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const urlDB = new sqlite3.Database('./modules/databases/shortenurls.sqlite');
const usersDB = new sqlite3.Database('./modules/databases/users.sqlite');
urlDB.run("CREATE TABLE IF NOT EXISTS urlsData(userid TEXT, shortenURL TEXT, toRedirectURL TEXT, visited INT)");
usersDB.run("CREATE TABLE IF NOT EXISTS usersData(userid TEXT, email TEXT, password TEXT, token TEXT)");

app.use(bodyParser.json());
app.use(bodyParser.urlenconded({extended: true}));

app.get("/", function(req, res){
res.sendStatus(200);
});

app.get("/user/:TOKEN", function(req, res){

});

app.get("/url/:shortenURL", function(req, res){

});

app.post("/urls/add", function(req, res){

});

app.post("/auth/register", function(req, res){

});

app.post("/auth/login", function(req, res){

});

app.listen(7777);