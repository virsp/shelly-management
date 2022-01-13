<template>
    <div class="row">
        <div class="col-auto">
			<b-overlay :show="this.loading" rounded="sm">
				<b-card v-if="true" border-variant="info" align="center" style="width: 25rem">
					<b-card-title class="mb-0">{{settings.name}}</b-card-title>
					<div>
						{{settings.device.type}} - {{this.ip}}
					</div>
					<div>
						{{this.ota.old_version}}
					</div>
					<div v-if="this.ota.has_update" class="text-primary mb-0">
						<b>Update available</b> 
						<p class="fw-italic">{{this.ota.new_version}}</p>
					</div>
					
					<b-card-text >
							<!-- WIFI AT -->
							<div class="mb-0 ">
								<div class="text-left">
									<b-icon v-if="this.toggle[0]" id="clickable" ref="click" @click="showMore(0)" icon="chevron-double-down"></b-icon>
									<b-icon v-else id="clickable" ref="click" @click="showMore(0)" icon="chevron-double-right"></b-icon>
										Wifi AP - <b v-bind:class="{'text-success': settings.wifi_ap.enabled, 'text-danger': !settings.wifi_ap.enabled}">{{settings.wifi_ap.enabled}}</b>
								</div>
								<div v-if="this.toggle[0]">
									<div class="row pl-4" v-for="(value, name) in removeEnable(settings.wifi_ap)" v-bind:key="value">
										<div class="text-capitalize">{{name}}</div>: {{value}}
									</div>

								</div>
							</div>

							<!-- WIFI STA -->
							<div class="mb-0">
								<div class="text-left">
									<b-icon v-if="this.toggle[1]" id="clickable" ref="click" @click="showMore(1)" icon="chevron-double-down"></b-icon> 
									<b-icon v-else id="clickable" ref="click" @click="showMore(1)" icon="chevron-double-right"></b-icon> 
									Wifi STA - <b v-bind:class="{'text-success': settings.wifi_sta.enabled, 'text-danger': !settings.wifi_sta.enabled}">{{settings.wifi_sta.enabled}}</b>
								</div>

								<div v-if="this.toggle[1]">
									<div class="row pl-4" v-for="(value, name) in removeEnable(settings.wifi_sta)" v-bind:key="name">
										<div class="text-capitalize">{{name}}</div>: {{value}}
									</div>
								</div>
							</div>
							
							<!-- MQTT -->
							<div class="mb-0">
								<div class="text-left">
									<b-icon v-if="this.toggle[2]" id="clickable" ref="click" @click="showMore(2)" icon="chevron-double-down"></b-icon> 
									<b-icon v-else id="clickable" ref="click" @click="showMore(2)" icon="chevron-double-right"></b-icon> 
									MQTT - <b v-bind:class="{'text-success': settings.mqtt.enable, 'text-danger': !settings.mqtt.enable}">{{settings.mqtt.enable}}</b>
								</div>
								
								<div v-if="this.toggle[2]">
									<div class="row pl-4" v-for="(value, name) in removeEnable(settings.mqtt)" v-bind:key="name">
										<div class="text-capitalize">{{name}}</div>: {{value}}
									</div>
								</div>
							</div> 

							<!-- CoIoT -->
							<div class="mb-0">
								<div class="text-left">
									<b-icon v-if="this.toggle[3]" id="clickable" ref="click" @click="showMore(3)" icon="chevron-double-down"></b-icon> 
									<b-icon v-else id="clickable" ref="click" @click="showMore(3)" icon="chevron-double-right"></b-icon> 
									CoIoT - <b v-bind:class="{'text-success': settings.coiot.enabled, 'text-danger': !settings.coiot.enabled}">{{settings.coiot.enabled}}</b>
								</div>
								
								<div v-if="this.toggle[3]">
									<div class="row pl-4" v-for="(value, name) in removeEnable(settings.coiot)" v-bind:key="name">
										<div class="text-capitalize">{{name}}</div>: {{value}}
									</div>
								</div>
							</div> 

							<!-- SNTP -->
							<div class="mb-0">
								<div class="text-left">
									<b-icon v-if="this.toggle[4]" id="clickable" ref="click" @click="showMore(4)" icon="chevron-double-down"></b-icon> 
									<b-icon v-else id="clickable" ref="click" @click="showMore(4)" icon="chevron-double-right"></b-icon> 
									SNTP - <b v-bind:class="{'text-success': settings.sntp.enabled, 'text-danger': !settings.sntp.enabled}">{{settings.sntp.enabled}}</b>
								</div>
								
								<div v-if="this.toggle[4]">
									<div class="row pl-4" v-for="(value, name) in removeEnable(settings.sntp)" v-bind:key="name">
										<div class="text-capitalize">{{name}}</div>: {{value}}
									</div>
								</div>
							</div> 

							<!-- Login -->
							<div class="mb-0">
								<div class="text-left">
									<b-icon v-if="this.toggle[5]" id="clickable" ref="click" @click="showMore(5)" icon="chevron-double-down"></b-icon> 
									<b-icon v-else id="clickable" ref="click" @click="showMore(5)" icon="chevron-double-right"></b-icon> 
									Login - <b v-bind:class="{'text-success': settings.login.enabled, 'text-danger': !settings.login.enabled}">{{settings.login.enabled}}</b>
								</div>
								
								<div v-if="this.toggle[5]">
									<div class="row pl-4" v-for="(value, name) in removeEnable(settings.login)" v-bind:key="name">
										<div class="text-capitalize">{{name}}</div>: {{value}}
									</div>
								</div>
							</div>

							<!-- CLOUD -->
							<div class="mb-0">
								<div class="text-left">
									<b-icon v-if="this.toggle[6]" id="clickable" ref="click" @click="showMore(6)" icon="chevron-double-down"></b-icon> 
									<b-icon v-else id="clickable" ref="click" @click="showMore(6)" icon="chevron-double-right"></b-icon> 
									Cloud - <b v-bind:class="{'text-success': settings.cloud.enabled, 'text-danger': !settings.cloud.enabled}">{{settings.cloud.enabled}}</b>
								</div>
								
								<div v-if="this.toggle[6]">
									<div class="row pl-4" v-for="(value, name) in removeEnable(settings.cloud)" v-bind:key="name">
										<div class="text-capitalize">{{name}}</div>: {{value}}
									</div>
								</div>
							</div> 
						<div>
							
							<div v-if="this.ota.has_update">
								<div v-if="!this.updating">
									<b-button @click="updateFirmware()" variant="primary">Update</b-button>
								</div>
								<div v-else>
									<b-button @click="updateFirmware()" variant="primary" disabled>Update in progress</b-button>
								</div>
							</div>
							<div v-else>
								{{settings.device.type}} running the latest firmware
							</div>
						</div>
		
					</b-card-text>
				</b-card>
			</b-overlay>
		
        </div>
    </div>
</template>
<script>
import {shelly} from '@/api/shelly';
import dummyData from '@/assets/dummyData'
export default {
	name: "Shelly",
    props: ['ip'],
	data() {
		return {
			verbose: [],
			temp: false,
			toggle:[],
			ota: {},
			settings: dummyData,
			loading: false,
			updating: false,
		}    
	},
    methods: {
        removeEnable(obj){
            const asArray = Object.entries(obj);
            const filtered = asArray.filter(([key, value]) => {
                return key !== 'enabled' && key !== 'enable'
                });
            const justStrings = Object.fromEntries(filtered);
            return justStrings
        },
        showMore(i){
            if(this.toggle[i]) this.$set(this.toggle, i, false); 
            else this.$set(this.toggle, i, true);
        },
        checkVerbose(){
            if(this.$refs.click){
                console.log("check verbose");
                let verboseNode = this.$refs.click.nextSibling.nodeValue;
                console.log(verboseNode);
                let exist = this.verbose.includes();
                console.log("is clicked " + exist);
                return exist;

            }else {
                return false;
            }
        },
		async updateFirmware(){
			console.log('firmware update issued');
			this.updating = true;
			this.loading = true;
			await new Promise(resolve => setTimeout(resolve, 2000));
			this.checkUpdatingStatus();
			
			await shelly.updateFirmware(this.ip);
		},
		async checkUpdatingStatus(){
			let ota = {
				status: 'updating'
			}
			while (ota.status === 'updating' || ota.status === 'unknown' ) {
				ota = await shelly.getOTA(this.ip)
				if(ota.status === 'idle'){
					this.updating = false;
					this.loading = false;
				}
				await new Promise(resolve => setTimeout(resolve, 200));
			}
			this.ota = ota;
		},
		async fetchSettings(){
			this.loading = true;
			await new Promise(resolve => setTimeout(resolve, 2000));
			
			// console.log('fetching settings for ' + this.ip);

			this.settings = await shelly.getSettings(this.ip);
			this.loading = false;
		},
		async fetchOTA(){
			this.loading = true;
			await new Promise(resolve => setTimeout(resolve, 2000));

			// console.log('fetching OTA for ' + this.ip);

			this.ota = await shelly.getOTA(this.ip);
			this.loading = false;

		}
    },
	mounted() {
		this.fetchSettings();
		this.fetchOTA();
	},

    
}
</script>
<style>

#clickable {
    cursor: pointer;
}
</style>