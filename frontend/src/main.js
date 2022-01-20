import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';

Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: function (h) { return h(App); }
}).$mount('#app');
