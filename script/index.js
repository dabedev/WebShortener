const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const urlDB = new sqlite3.Database('./modules/databases/shortenurls.sqlite');
const usersDB = new sqlite3.Database('./modules/databases/users.sqlite');
urlDB.run("CREATE TABLE IF NOT EXISTS urlsData(userid TEXT, shortenURL TEXT, toRedirectURL TEXT, visited INT)");
usersDB.run("CREATE TABLE IF NOT EXISTS usersData(username TEXT, userid TEXT, email TEXT, password TEXT, token TEXT)");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
res.sendStatus(200);
});

app.get("/user", function(req, res){

});

app.get("/url/:shortenURL", function(req, res){

});

app.post("/urls/add", function(req, res){

});

app.get("/urls/list", function(req, res){

});

app.post("/auth/register", function(req, res){
if (!req.body.username || !req.body.email || !req.body.password) return res.json({success:false,msg:"You must complete all the fields"});
usersDB.get(`SELECT * FROM usersData WHERE username = ${req.body.username} OR email = ${req.body.email}`, function(err, rows){
if (rows.length > 0) return res.json({success:false,msg:"That username/email is already registered"});
db.run(`INSERT INTO usersData(username, userid, email, password, token) VALUES(?,?,?,?,?)`, [req.body.username, JSON.stringify(Date.now()), req.body.email, req.body.password, new Buffer(JSON.stringify(Date.now())).toString('base64')])
res.json({success:true,msg:""});
});
});

app.post("/auth/login", function(req, res){
if (!req.body.username || !req.body.password) return res.json({success:false,msg:"You must complete all the fields"});
usersDB.get(`SELECT * FROM usersData WHERE username = ${req.body.username} OR password = ${req.body.password}`, function(err, rows){
if (rows.length > 0) return res.json({success:false,msg:"Unvalid login credentials were provided"});
console.log(rows)
res.json({success:true,msg:rows.first().token});
});
});

app.listen(7777);