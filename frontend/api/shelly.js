const fetch = require('node-fetch');

let shelly = {
    getStatus: async (ip) => {

    let url = 'http://' + ip + '/shelly';
    let options = {method: 'GET'};
    let data;
    await fetch(url, options)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            data = json
        })
        .catch(err => console.error('error:' + err));
    
    return data;
    },

    getSettings: async (ip) => {
        let url = 'http://' + ip + '/settings';
        let options = {method: 'GET'};
        let data;
        await fetch(url, options)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            data = json
        })
        .catch(err => console.error('error:' + err));
    
        return data;
    }
}

export {shelly};