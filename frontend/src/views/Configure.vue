<template>
    <div>
        <div class="row">
            <div class="col">
                <h1>Configuration</h1>
            </div>
        </div>
        <div class="row justify-content-center">
            <b-form>
                <label for="add-ip">Add a IP to the database</label>

                <b-form-input v-model="ip" id="add-ip"></b-form-input>
            </b-form>
        </div>
        <div class="row justify-content-center">
            <div class="col-auto">
                {{shellies.ips}}
                <b-list-group>
                    <b-list-group-item v-for="shelly in shellies.ips" v-bind:key="shelly">{{shelly}}</b-list-group-item>
                </b-list-group>
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
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import logger from '@/plugins/logger';
export default {
    name: 'Configuration',
    data () {
        return {
            ip: null,
            ips: [],
            fields: [
                'IP',
                { key: 'del', label: 'Remove time' }
            ]
        };
    },
    methods: {
        removeTime (i) {
            this.shellies[i]._rowVariant = 'danger';
            this.$refs.table.refresh();
            logger.log(this.shellies);
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
