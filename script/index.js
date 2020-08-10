const express = require('express');
const app = express();
app.listen(7777);
app.get("/", function(req, res){
res.sendStatus(200);
});