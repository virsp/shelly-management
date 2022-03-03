<template>
    <div class="row pt-2">
        <div class="col">
            <h1>Shelly overview</h1>
            <div v-if="this.shellies" class="row justify-content-md-center">
                <div v-for="shelly in shellies.ips" class="col-auto pb-4" v-bind:key="shelly">
                    <Shelly :ip="shelly"/>
                </div>
            </div>
            <div v-else>
                <b-alert class="col" show dismissible variant="danger">
                    <h4 class="alert-heading">Connection problems!</h4>
                    There seems to be a connection error to the database.
                    <p class="mb-0">
                        Retry again!
                    </p>
                </b-alert>
            </div>
        </div>
    </div>
</template>
<script>
import Shelly from '@/components/Shelly.vue';
import logger from '@/plugins/logger';
import { mapGetters } from 'vuex';
export default {
    name: 'Dashboard',
    components: {
        Shelly
    },
    methods: {
        async getDeviceIPS () {
            this.$store.dispatch('getIPS');
            logger.log(this.shellies);
        }
    },
    computed: {
        ...mapGetters({ shellies: 'getIPS' })
    }
};
</script>
<style>

</style>
