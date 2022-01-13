<template>
    <div class="row pt-2">
        <div class="col">
            <h1>Shelly overview</h1>
            <div v-if="this.shellies" class="row">
                <div v-for="shelly in this.shellies" class="col-auto">
                    <Shelly :ip="shelly"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Shelly from '@/components/Shelly.vue';
import {db} from '@/api/database';
import logger from '@/plugins/logger';
export default {
    name: 'Dashboard',
    components: {
        Shelly,
    },
    data() {
        return {
            shellies: null,
        }
    },
    methods: {
        async getDeviceIPS(){
            let temp = await db.getIPS();
            this.shellies = temp.ips;
            logger.log(this.shellies);
        }
    },
    mounted() {
        this.getDeviceIPS();
    },
}
</script>
<style>
    
</style>