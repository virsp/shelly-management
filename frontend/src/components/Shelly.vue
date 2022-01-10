<template>
    <div class="row">
        <div class="col-auto">
            <b-card v-bind:title="settings.device.type + ' - ' + settings.name" border-variant="info">
                <b-card-text>
                    <div class="mb-0 ">
                        <div class="text-left">
                            <b-icon id="clickable" @click="test()" icon="chevron-double-down"></b-icon> Wifi AP - <b v-bind:class="{'text-success': settings.wifi_ap.enabled, 'text-danger': !settings.wifi_ap.enabled}">{{settings.wifi_ap.enabled}}</b>
                    
                        </div>
                        <div class="row pl-4" v-for="(value, name) in removeEnable(settings.wifi_ap)" v-bind:key="value">
                            <div class="text-capitalize">{{name}}</div>: {{value}}
                        </div>
                    </div>

                    <div class="mb-0">
                        <div class="text-left">
                            Wifi STA - <b v-bind:class="{'text-success': settings.wifi_sta.enabled, 'text-danger': !settings.wifi_sta.enabled}">{{settings.wifi_sta.enabled}}</b>
                        </div>
                        <div class="row pl-4" v-for="(value, name) in removeEnable(settings.wifi_sta)" v-bind:key="name">
                            <div class="text-capitalize">{{name}}</div>: {{value}}
                        </div>
                    </div>
                    
                    <div class="mb-0">
                        <div class="text-left">
                            MQTT - <b v-bind:class="{'text-success': settings.mqtt.enable, 'text-danger': !settings.mqtt.enable}">{{settings.mqtt.enable}}</b>
                        </div>
                        <div v-if="true">
                            <div class="row pl-4" v-for="(value, name) in removeEnable(settings.mqtt)" v-bind:key="name">
                                <div class="text-capitalize">{{name}}</div>: {{value}}
                            </div>

                        </div>
                    </div> 
                   
                </b-card-text>
            </b-card>

        </div>
    </div>
</template>
<script>
export default {
    name: "Shelly",
    
    methods: {
        removeEnable(obj){
            const asArray = Object.entries(obj);
            const filtered = asArray.filter(([key, value]) => {
                return key !== 'enabled' && key !== 'enable'
                });
            const justStrings = Object.fromEntries(filtered);
            return justStrings
        },
        test(eeee){
            console.log(this.$refs.input);
        }
    },
    data() {
        return {
            verbose: false,
            settings: {
	"device": {
		"type": "SHPLG-S",
		"mac": "24A1602154DC",
		"hostname": "shellyplug-s-2154DC",
		"num_outputs": 1,
		"num_meters": 1
	},
	"wifi_ap": {
		"enabled": false,
		"ssid": "shellyplug-s-2154DC",
		"key": ""
	},
	"wifi_sta": {
		"enabled": true,
		"ssid": "gud.net",
		"ipv4_method": "dhcp",
		"ip": null,
		"gw": null,
		"mask": null,
		"dns": null
	},
	"wifi_sta1": {
		"enabled": false,
		"ssid": null,
		"ipv4_method": "dhcp",
		"ip": null,
		"gw": null,
		"mask": null,
		"dns": null
	},
	"ap_roaming": {
		"enabled": false,
		"threshold": -70
	},
	"mqtt": {
		"enable": true,
		"server": "192.168.253.234:1883",
		"user": "mqtt",
		"id": "shelly_hallen",
		"reconnect_timeout_max": 60.000000,
		"reconnect_timeout_min": 2.000000,
		"clean_session": true,
		"keep_alive": 60,
		"max_qos": 0,
		"retain": true,
		"update_period": 30
	},
	"coiot": {
		"enabled": true,
		"update_period": 15,
		"peer": ""
	},
	"sntp": {
		"server": "time.google.com",
		"enabled": true
	},
	"login": {
		"enabled": false,
		"unprotected": false,
		"username": "admin"
	},
	"pin_code": "",
	"name": "Lampa Hall",
	"fw": "20211109-130223/v1.11.7-g682a0db",
	"discoverable": true,
	"build_info": {
		"build_id": "20211109-130223/v1.11.7-g682a0db",
		"build_timestamp": "2021-11-09T13:02:23Z",
		"build_version": "1.0"
	},
	"cloud": {
		"enabled": false,
		"connected": false
	},
	"timezone": "Europe/Stockholm",
	"lat": 59.344490,
	"lng": 18.039490,
	"tzautodetect": true,
	"tz_utc_offset": 3600,
	"tz_dst": false,
	"tz_dst_auto": true,
	"time": "22:32",
	"unixtime": 1641677560,
	"led_status_disable": false,
	"debug_enable": false,
	"allow_cross_origin": false,
	"actions": {
		"active": false,
		"names": [
			"btn_on_url",
			"out_on_url",
			"out_off_url"
		]
	},
	"hwinfo": {
		"hw_revision": "prod-190516",
		"batch_id": 1
	},
	"max_power": 1800,
	"led_status_disable": false,
	"led_power_disable": false,
	"relays": [
		{
			"name": null,
			"appliance_type": "Uttag",
			"ison": true,
			"has_timer": false,
			"default_state": "off",
			"auto_on": 0.00,
			"auto_off": 0.00,
			"schedule": false,
			"schedule_rules": [],
			"max_power": 1800
		}
	]
},
        }
    },
    
}
</script>
<style>

#clickable {
    cursor: pointer;
}
</style>