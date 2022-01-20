import { db } from '../../src/api/database';
test('Get ips from database', async () => {
    const data = await db.getIPS();
    const obj = {
        ips: [
            '123.234.123.0',
            '123.234.123.1',
            '123.234.123.0',
            '123.234.123.1',
            '123.123.123.123'
        ]
    };
    console.log(data);
    expect(data).toStrictEqual(obj);
});
