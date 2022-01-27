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
 * Saves the state to file
 */
async function saveToFile(){
    try {
        console.log('Saving to file...');
        fs.writeFileSync(file, JSON.stringify(Array.from(shellies)));
    } catch (error) {
        console.log("File write error " + error);
        throw new Error('Something went wrong writing to file: ' + error);
    }
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
    try {
        shellies.add(ip)
        await saveToFile();
    } catch (error) {
        throw error;
    }
}

/**
 * Retrieve stored ips
 * @returns an object with the ips with the format {ips: [...]}
 */
function getIPS(){
    return {ips: Array.from(shellies)};
}

/**
 * Removes the given ip from the database
 * if ip already exists it throws error 
 * @param {String} ip to be removed
 */
async function removeIP(ip){
    if(!shellies.has(ip)){
        throw new Error(ip + ' does not exist in the db');
    }
    try {
        shellies.delete(ip);
        await saveToFile();
    } catch (error) {
        throw error;
    }
}
module.exports = {addIP, getIPS, removeIP};