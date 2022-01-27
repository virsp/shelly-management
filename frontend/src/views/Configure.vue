<template>
    <div>
        <div class="row">
            <div class="col">
                <h1>Configuration</h1>
            </div>
        </div>
        <b-overlay :show="this.loading">
            <template #overlay>
                <div class="text-center text-danger my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Loading...</strong>
                </div>
            </template>
            <div class="row justify-content-center">
                <b-form class="col-auto" @submit.stop.prevent="saveIP()">
                    <label for="add-ip">Add a IP to the database</label>
                    <b-input-group>
                        <b-form-input v-model="ip" id="add-ip" placeholder="e.g. 192.192.192.192"></b-form-input>
                        <b-button @click="saveIP()" variant="primary">Save</b-button>
                    </b-input-group>
                </b-form>
            </div>
            <div class="row justify-content-center">
                <div class="col-auto">
                    <b-table ref="table" striped hover outlined :items="shellies" :fields="fields">
                        <template #cell(IP)="data">
                            {{ data.item.ip }}
                        </template>

                        <template #cell(del)="data">
                            <b-icon id="clickable" icon="x-circle-fill" @click="removeTime(data.index)"></b-icon>
                            {{data.index}}
                        </template>

                    </b-table>
                </div>
            </div>
            <div v-if="this.delete > 0" class="row justify-content-center">
                <b-button @click="removeIP()" variant=danger>Remove selected</b-button>
            </div>

        </b-overlay>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import logger from '@/plugins/logger';
export default {
    name: 'Configuration',
    data () {
        return {
            ip: null,
            ips: [],
            delete: 0,
            loading: false,
            fields: [
                'IP',
                { key: 'del', label: 'Remove time' }
            ]
        };
    },
    methods: {
        ...mapActions({ addToDB: 'addIP', removeFromDB: 'removeIP' }),
        removeTime (i) {
            if (this.shellies[i]._rowVariant) {
                delete this.shellies[i]._rowVariant;
                this.delete--;
            } else {
                this.shellies[i]._rowVariant = 'danger';
                this.delete++;
            }
            this.$refs.table.refresh();
        },
        async saveIP () {
            logger.log('enter pressed ' + this.ip);
            this.loading = true;
            await this.addToDB(this.ip);
            this.loading = false;
        },
        async removeIP () {
            this.loading = true;
            const ipToRemove = [];
            // weird abstraction to enable small loading window rendering
            this.shellies.forEach(shelly => {
                if (shelly._rowVariant) {
                    logger.log('removing ' + shelly.ip + ' from db');
                    ipToRemove.push(shelly.ip);
                }
            });
            for (let i = 0; i < ipToRemove.length; i++) {
                await this.removeFromDB(ipToRemove[i]);
            }
            this.loading = false;
            this.delete = 0;
        }
    },
    computed: {
        ...mapGetters({ shellies: 'getIPSAsObject' })
    },
    mounted () {
        if (this.ips.length === 0) {
            logger.log('saving ips');
            this.ips = this.shellies;
            logger.log(this.ips);
        }
    }
};
</script>
<style>
#clickable {
    cursor: pointer;
}
</style>
