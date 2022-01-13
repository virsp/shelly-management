const fetch = require('node-fetch');
import logger from '@/plugins/logger';

let shelly = {
    getStatus: async (ip) => {

    let url = 'http://' + ip + '/shelly';
    let options = {method: 'GET'};
    let data;
    await fetch(url, options)
        .then(res => res.json())
        .then(json => {
            data = json
        })
        .catch(err => logger.error('error:' + err));
    
    return data;
    },

    getSettings: async (ip) => {
        let url = 'http://' + ip + '/settings';
        
        let options = {method: 'GET'};
        let data;
        await fetch(url, options)
        .then(res => res.json())
        .then(json => {
            data = json;
        })
        .catch(err => logger.error('error:' + err));
        return data;
    },
    getOTA: async (ip) => {
        let url = 'http://' + ip + '/ota';
        let options = {method: 'GET'};
        let data;
        await fetch(url, options)
        .then(res => res.json())
        .then(json => {
            data = json
        })
        .catch(err => logger.error('error:' + err));
    
        return data;
    },
    updateFirmware: async (ip) => {
        let url = 'http://' + ip + '/ota?update=true';
        let options = {method: 'GET'};
        let data;
        await fetch(url, options)
        .then(res => res.json())
        .then(json => {
            data = json
        })
        .catch(err => logger.error('error:' + err));
        return data;
    }

}

export {shelly};