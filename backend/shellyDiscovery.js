const fetch = require('node-fetch');

function print(token, ip, index, acc){
    console.log('token ' + token + ' ip ' + ip + ' index ' + index);
    if(index > 3) {
        acc.push(ip)
        
        return acc;
    }
    else if(token[index].length > 1 && index == 3){
        for(let i = token[index][0]; i <= token[index][1]; i++){
            console.log('printing dat ip ' + ip + '.' + i);
            acc.push(ip + '.' + i);
        }
        return acc;
    }
    else if(token[index].length > 1){
        console.log('splitting');
        let newIndex = index + 1;
        for(let i = token[index][0]; i <= token[index][1]; i++){
            console.log('to ' + i + ' at depth ' + index);
            acc.push(print(token, ip + '.' + i, newIndex, acc));
            console.log(acc);
        }
        // return acc;
    }
    else{
        console.log('base');
         acc = print(token, ip+= '.' + token[index], ++index, acc);
         return acc;
    }
}
async function checkIfShelly(ip){
    console.log('checking ' + ip);
    let url = 'http://' + ip + '/shelly';

    let options = {method: 'GET'};

    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
}

let discovery = {
    findShellies: async (range) => {
        const args = range.split(".");
        let ranges = [];
        args.forEach((token, i) => {
            ranges.push(token.split("-"));
        });
        let start = [], end = [];
        ranges.forEach(range => {
            start.push(range[0])
            if(range.length > 1){
                end.push(range[1]);
            }else {
                end.push(range[0]);
            }
        });

        console.log(ranges);
        // console.log(print(ranges, "", 0, []));
        let startHex = "0x";
        let endHex = "0x";
        start.forEach(octet => {
            startHex += parseInt(octet).toString(16).toUpperCase();
        });
        end.forEach(octet => {
            endHex += parseInt(octet).toString(16).toUpperCase();
            
        });
        startInt = parseInt(startHex, 16);
        endInt = parseInt(endHex, 16);
        let ipToBeSearched = [];
        for(let ip = startInt; ip <= endInt; ip++){
            let adress = ip.toString(16);
            let prev = 0;
            let parsedAdress = "";
            for(let i = 2; i <= adress.length; i += 2){
                parsedAdress += parseInt(adress.substring(prev, i), 16) + '.';
                prev = i;
            }
            ipToBeSearched.push(parsedAdress.substring(0, parsedAdress.length-1));
        }
        console.log(ipToBeSearched);
        ipToBeSearched.forEach(ip => {
           checkIfShelly(ip);
        });
    }
}
