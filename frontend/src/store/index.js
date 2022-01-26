import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '@/api/database';
import logger from '@/plugins/logger';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ips: []
    },
    mutations: {
        saveIPS (state, ips) {
            state.ips = ips;
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
        }
    },
    getters: {
        getIPS (state) {
            return state.ips;
        }
    },
    modules: {
    }
});
