import { shelly } from '../../src/api/shelly';

const ip = process.env.SAMPLE_DEVICE;
test('Get status for device', async () => {
    const data = await shelly.getStatus(ip);
    const obj = {
        type: 'SHPLG-S',
        mac: '24A1602154DC',
        auth: false,
        fw: '20211109-130223/v1.11.7-g682a0db',
        num_outputs: 1,
        num_meters: 1
    };
    expect(data).toStrictEqual(obj);
});

test('Get setting for device', async () => {
    const data = await shelly.getSettings(ip);
    expect(data).not.toBeNull();
});
test('Get OTA for device', async () => {
    const data = await shelly.getOTA(ip);
    expect(data).not.toBeNull();
});
