const express = require('express');
const app = express();
var cors = require('cors')
const data = require('./data');
const port = 3000;

app.use(cors())
console.log('Starting express on port ' + port);

app.get('/ips', (req, res) => {
    console.log('Get IP request from ' + req.hostname);
    if (data.getIPS().ips.length == 0) {
        res.status(500).json({
            'msg': 'No entries in the database!'
        })
    }else {
        res.send(data.getIPS())
    }
})

app.post('/add', (req,res) => {
    data.addIP(req.query.ip);
    res.status(200).send('Succesfully stored ' + req.query.ip);    
})

app.listen(port)