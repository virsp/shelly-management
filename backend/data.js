let fs = require('fs');
const file = "ips.json";
let shellies;

try {
    let imported = require('./ips.json');
    shellies = new Set(imported);    
} catch (error) {
    console.log('No data file found, init new');
    shellies = new Set();
}

/**
 * Adds the ip to the database
 * if ip already exists it throws an error 
 * @param {String} ip to be added to the database
 */
async function addIP(ip){
    if(shellies.has(ip)){
        console.log(ip + " already exists!");
        throw new Error(ip + ' already exists!');
    }
    shellies.add(ip)
    try {
        console.log('Writing ' + ip + ' to file');
        fs.writeFileSync(file, JSON.stringify(Array.from(shellies)));
    } catch (error) {
        console.log("file write error " + error);
        throw new Error('Something went wrong writing to file: ' + error);
    }
}
/**
 * Retrieve stored ips
 * @returns an object with the ips with the format {ips: [...]}
 */
function getIPS(){
    return {ips: Array.from(shellies)};
}
module.exports = {addIP, getIPS};