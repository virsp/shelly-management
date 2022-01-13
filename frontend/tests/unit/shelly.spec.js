import {shelly} from '../../src/api/shelly';

let ip = process.env.SAMPLE_DEVICE
test('Get status for device', async () => {
    let data = await shelly.getStatus(ip);
    let obj = {
        type: 'SHPLG-S',
        mac: '24A1602154DC',
        auth: false,
        fw: '20211109-130223/v1.11.7-g682a0db',
        num_outputs: 1,
        num_meters: 1
      }
    expect(data).toStrictEqual(obj);
})

test('Get setting for device', async () => {
    let data = await shelly.getSettings(ip);
    expect(data).not.toBeNull();
})
test('Get OTA for device', async () => {
    let data = await shelly.getOTA(ip);
    expect(data).not.toBeNull();
})