const express = require('express')
const app = express()
const data = require('./data');
const port = 3000;

console.log('Starting express on port ' + port);

app.get('/ips', (req, res) => {
    console.log('get ip request');
    res.send(data.getIPS())
})

app.post('/add', (req,res) => {
    data.addIP(req.query.ip);
    res.status(200).send('Succesfully stored ' + req.query.ip);    
})

app.listen(port)