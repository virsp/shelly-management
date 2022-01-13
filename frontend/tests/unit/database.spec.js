import {db} from '../../src/api/database';
test('Get ips from database', async () => {
    let data = await db.getIPS();
    let obj = {
        ips: [
          '123.234.123.0',
          '123.234.123.1',
          '123.234.123.0',
          '123.234.123.1',
          '123.123.123.123'
        ]
      }
      console.log(data);
    expect(data).toStrictEqual(obj);
})
