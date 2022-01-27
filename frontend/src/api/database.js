import logger from '@/plugins/logger';
const fetch = require('node-fetch');

/**
 * General request function
 * @param {String} url to api endpoint
 * @param {*} options fetch options
 * @returns returns response data from request
 */
async function sendRequest (url, options) {
    let data;
    await fetch(url, options)
        .then(res => res.json())
        .then(json => {
            data = json;
            logger.log(json);
        })
        .catch(err => logger.error('error:' + err));
    return data;
}

const db = {
    getIPS: async () => {
        const url = process.env.VUE_APP_DATABASE + '/ips';
        const options = { method: 'GET' };
        return await sendRequest(url, options);
    },
    addIP: async (ip) => {
        const url = process.env.VUE_APP_DATABASE + '/add?ip=' + ip;
        const options = { method: 'POST' };
        return await sendRequest(url, options);
    },
    removeIP: async (ip) => {
        const url = process.env.VUE_APP_DATABASE + '/remove?ip=' + ip;
        const options = { method: 'DELETE' };
        return await sendRequest(url, options);
    }
};

export { db };
