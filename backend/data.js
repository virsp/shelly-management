let fs = require('fs');
const file = "ips.json";
let shellies;

try {
    shellies = require('./ips.json');    
} catch (error) {
    console.log('No data file found, init new');
    shellies = {
        ips: []
    }
}

async function addIP(ip){
    shellies.ips.push(ip);
    try {
        console.log('Writing ' + ip + ' to file');
        fs.writeFileSync(file, JSON.stringify(shellies));
    } catch (error) {
        console.log(error);
    }
}

function getIPS(){
    return shellies;
}
module.exports = {addIP, getIPS};