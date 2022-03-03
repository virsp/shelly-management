# Shelly Management
A shelly dashboard to monitor shelly devices. So far it's very basic but there are plenty of suggested improvements to be made whenever time is there.

## Installation
1. Pull the repo
2. Navigate to root folder
3. Configure the ports in ***docker-compose.yml*** to personal prefrence
4. Configure the ***.env*** file in `frontend/.env` to point towards the backend server port (configured in docker-compose.yml), i.e http://some-ip:port 
5. run `docker-compose up` and the project will build 

## Contribution
I have no idea on how to manage a public repository. 

## Some suggested improvements
### Frontend

- [x] Dialogue to enable CORS on device
- [ ] Vuex
  - [ ] Save more device info in vuex to prevent unnecessary request to devices
    - [x] Save to vuex
    - [ ] Use vuex data and poll device for updates
- [ ] Configure
  - [ ] Configure STA 
  - [ ] Configure actions
  - [ ] Change per device settings
  - [ ] Provide OTA override, with custom firmware links
  - [ ] Support for HTTP authentication
  - [x] Override DB API ip
- [ ] Dashboard
  - [ ] Device reboot
  - [ ] status if device is not responding (ish)
  - [ ] New device without cors update
- [ ] Per device support, as for now only common HTTP API will be focused on


### Backend 
- [ ] Device auto discovery
- [x] Prevent duplicate IP adresses 
- [x] Improve error handling and client responses

### Docker
- [ ] Pass env via docker-compose to frontend to allow for less configuration before build
- [ ] Some updating mechanism for the whole project
