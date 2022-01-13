const fetch = require('node-fetch');
import logger from '@/plugins/logger';

let db = {
    getIPS: async () => {
        let url = 'http://localhost:3000/ips';

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