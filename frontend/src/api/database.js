import logger from '@/plugins/logger';
const fetch = require('node-fetch');

const db = {
    getIPS: async () => {
        const url = process.env.VUE_APP_DATABASE + '/ips';
        const options = { method: 'GET' };
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
};

export { db };
