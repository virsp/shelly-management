# shelly-management
A shelly dashboard to monitor shelly devices

## Some suggest improvements
### Frontend
- [ ] Change per device settings
- [ ] Auto enable CORS on device
- [ ] Support for HTTP authentication
- [ ] Configure STA 
- [ ] Configure actions
- [ ] Device reboot
- [ ] Provide OTA override, with custom firmware links
- [ ] Per device support, as for now only common HTTP API will be focused on
- [x] Override DB API ip

### Backend 
- [ ] Device auto discovery
- [x] Prevent duplicate IP adresses 
- [x] Improve error handling and client responses

### Docker
- [ ] Pass env via docker-compose to frontend to allow for less configuration before build