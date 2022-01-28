import logger from '@/plugins/logger';
const fetch = require('node-fetch');

const shelly = {
    getStatus: async (ip) => {
        const url = 'http://' + ip + '/shelly';
        const options = { method: 'GET' };
        let data;
        await fetch(url, options)
            .then(res => res.json())
            .then(json => {
                data = json;
            })
            .catch(err => logger.error('error:' + err));

        return data;
    },

    getSettings: async (ip) => {
        const url = 'http://' + ip + '/settings';

        const options = { method: 'GET' };
        let data;
        await fetch(url, options)
            .then(res => res.json())
            .then(json => {
                data = json;
            })
            .catch(err => {
                logger.error('error:' + err);
                throw new Error(err);
            });
        return data;
    },
    getOTA: async (ip) => {
        const url = 'http://' + ip + '/ota';
        const options = { method: 'GET' };
        let data;
        await fetch(url, options)
            .then(res => res.json())
            .then(json => {
                data = json;
            })
            .catch(err => {
                logger.error('error:' + err);
                throw new Error(err);
            });

        return data;
    },
    updateFirmware: async (ip) => {
        const url = 'http://' + ip + '/ota?update=true';
        const options = { method: 'GET' };
        let data;
        await fetch(url, options)
            .then(res => res.json())
            .then(json => {
                data = json;
            })
            .catch(err => logger.error('error:' + err));
        return data;
    }

};

export { shelly };
