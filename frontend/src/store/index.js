import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '@/api/database';
import { shelly } from '@/api/shelly';
import logger from '@/plugins/logger';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ips: [],
        shellySettings: {}
    },
    mutations: {
        saveIPS (state, ips) {
            state.ips = ips;
        },
        addShellySetting (state, ip, settings) {
            state.shellySettings[ip] = { shelly: settings };
        }
    },
    actions: {
        /**
         * Retrieves the ips from the database
         * error handling not implemented yet
         * @param {*} state
         */
        async getIPS (state) {
            try {
                const ips = await db.getIPS();
                logger.log('Saving ips to store');
                state.commit('saveIPS', ips);
            } catch (error) {
                logger.error(error);
            }
        },
        /**
         * Attempts to add the ip to the database
         * @param {*} state
         * @param {String} ip to be added to database
         */
        async addIP (state, ip) {
            await db.addIP(ip);
            await state.dispatch('getIPS');
        },
        /**
         * Removes a IP from the database
         * @param {*} state
         * @param {String} ip to be removed
         */
        async removeIP (state, ip) {
            await db.removeIP(ip);
            await state.dispatch('getIPS');
        },
        /**
         * Provides basic information about the device. It does not require HTTP authentication, even if authentication is enabled globally
         * @param {*} state
         * @param {String} ip shelly device ip
         * @returns status in json
         */
        async getStatus (state, ip) {
            try {
                return await shelly.getStatus(ip);
            } catch (error) {
                throw new Error(error);
            }
        },
        /**
         * Gets settings for shelly device and saves it to the store
         * @param {String} ip shelly device ip
         * @returns shelly status in json format
         */
        async getSettings (state, ip) {
            try {
                const settings = await shelly.getSettings(ip);
                state.commit('addShellySetting', ip, settings);
                return settings;
            } catch (error) {
                throw new Error(error);
            }
        },
        /**
         * Provides information about the device firmware version
         * @param {String} ip shelly device ip
         * @returns shelly status in json format
         */
        async getOTA (state, ip) {
            try {
                return await shelly.getOTA(ip);
            } catch (error) {
                throw new Error(error);
            }
        },
        /**
         * Attempts a OTA update of the given device
         * @param {String} ip shelly device ip
         * @returns shelly status in json format
         */
        async updateFirmware (state, ip) {
            try {
                return await shelly.updateFirmware(ip);
            } catch (error) {
                throw new Error(error);
            }
        },
        /**
         * Attemps to enable cors on the device if it supports it
         * @param {String} ip shelly device ip
         * @returns shelly status in json format
         */
        async enableCORS (state, ip) {
            try {
                return await shelly.enableCORS(ip);
            } catch (error) {
                throw new Error(error);
            }
        }
    },
    getters: {
        getIPS (state) {
            return state.ips;
        },
        getIPSAsObject (state) {
            const temp = [];
            if (state.ips.length === 0) {
                logger.log('ips is empty');
            } else {
                state.ips.ips.forEach(ip => {
                    logger.log(ip);
                    const obj = { ip: ip };
                    temp.push(obj);
                });
                logger.log(temp);
            }
            return temp;
        }
    },
    modules: {
    }
});
