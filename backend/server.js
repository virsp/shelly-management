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

app.post('/add', async (req,res) => {
    try {
        await data.addIP(req.query.ip);
        res.status(200).json({msg: 'Succesfully stored ' + req.query.ip});    
    } catch (err) {
        res.status(409).json({error: err.message})
    }
})

app.delete('/remove', async (req, res) => {
    try {
        console.log('Attempting to remove ' + req.query.ip + ' from db...');
        await data.removeIP(req.query.ip);
        console.log('removal succeful!');
        res.status(200).json({msg: 'Succesfully removed ' + req.query.ip});    
    } catch (err) {
        console.log(err.message);
        res.status(409).json({error: err.message})
    }
})

app.listen(port)