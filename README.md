# shelly-management
A shelly dashboard to monitor shelly devices

## Some suggest improvements
### Frontend

- [ ] Auto enable CORS on device
- [ ] Vuex
  - [ ] Save more device info in store to prevent unnecessary request to devices
- [ ] Configure
  - [ ] Configure STA 
  - [ ] Configure actions
  - [ ] Change per device settings
  - [ ] Provide OTA override, with custom firmware links
  - [ ] Support for HTTP authentication
  - [x] Override DB API ip
- [ ] Dashboard
  - [ ] Device reboot
  - [ ] status if device is not responding
- [ ] Per device support, as for now only common HTTP API will be focused on


### Backend 
- [ ] Device auto discovery
- [x] Prevent duplicate IP adresses 
- [x] Improve error handling and client responses

### Docker
- [ ] Pass env via docker-compose to frontend to allow for less configuration before build
