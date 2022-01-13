const fetch = require('node-fetch');
import logger from '@/plugins/logger';

let db = {
    getIPS: async () => {
        let url = process.env.VUE_APP_DATABASE + '/ips';
        let options = {method: 'GET'};
        let data
        await fetch(url, options)
        .then(res => res.json())
        .then(json => {
            data = json;
            logger.log(json)
        })
        .catch(err => logger.error('error:' + err));
        return data;
    }
}

export {db};