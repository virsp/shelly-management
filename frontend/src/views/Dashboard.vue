<template>
    <div class="row pt-2">
        <div class="col">
            <h1>Shelly overview</h1>
            <div v-if="this.shellies" class="row justify-content-md-center">
                <div v-for="shelly in shellies.ips" class="col-auto pb-4" v-bind:key="shelly">
                    <Shelly :ip="shelly"/>
                </div>
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
    },
    mounted () {
        this.getDeviceIPS();
    }
};
</script>
<style>

</style>
