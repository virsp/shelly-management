import logger from '@/plugins/logger';
const fetch = require('node-fetch');

/**
 * Sends request to given parameters
 * @param {String} url api endpoint
 * @param {Object} options with options
 * @returns json object if succeful
 */
async function sendRequest (url, options) {
    try {
        const res = await fetch(url, options);
        if (res.ok) {
            return await res.json();
        } else {
            throw new Error({ code: res.status, err: res });
        }
    } catch (error) {
        throw new Error(error);
    }
}

const shelly = {
    /**
     * Provides basic information about the device. It does not require HTTP authentication, even if authentication is enabled globally
     * @param {String} ip shelly device ip
     * @returns shelly status in json format
     */
    getStatus: async (ip) => {
        const url = 'http://' + ip + '/shelly';
        const options = { method: 'GET' };
        try {
            return await sendRequest(url, options);
        } catch (error) {
            logger.error('shelly getStatus failed: ' + error);
            throw new Error(error);
        }
    },
    /**
     * Represents device configuration attributes
     * @param {String} ip shelly device ip
     * @returns shelly status in json format
     */
    getSettings: async (ip) => {
        const url = 'http://' + ip + '/settings';
        const options = { method: 'GET' };
        try {
            return await sendRequest(url, options);
        } catch (error) {
            logger.error('shelly getSetting failed: ' + error);
            throw new Error(error);
        }
    },
    /**
     * Provides information about the device firmware version
     * @param {String} ip shelly device ip
     * @returns shelly status in json format
     */
    getOTA: async (ip) => {
        const url = 'http://' + ip + '/ota';
        const options = { method: 'GET' };
        try {
            return await sendRequest(url, options);
        } catch (error) {
            logger.error('shelly getOTA failed: ' + error);
            throw new Error(error);
        }
    },
    /**
     * Attempts a OTA update of the given device
     * @param {String} ip shelly device ip
     * @returns shelly status in json format
     */
    updateFirmware: async (ip) => {
        const url = 'http://' + ip + '/ota?update=true';
        const options = { method: 'GET' };
        try {
            return await sendRequest(url, options);
        } catch (error) {
            logger.error('shelly update failed: ' + error);
            throw new Error(error);
        }
    },
    /**
     * Attemps to enable cors on the device if it supports it
     * @param {String} ip shelly device ip
     * @returns shelly status in json format
     */
    enableCORS: async (ip) => {
        const url = 'http://' + ip + '/settings?allow_cross_origin=true';
        const options = { method: 'GET' };
        try {
            return await sendRequest(url, options);
        } catch (error) {
            logger.error('shelly enable CORS failed: ' + error);
            throw new Error(error);
        }
    }
};

export { shelly };
