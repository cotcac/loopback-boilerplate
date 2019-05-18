import { Client, expect } from '@loopback/testlab';
import { AppApplication } from '../..';
import { setupApplication } from './test-helper';

describe('PingController', () => {
  let app: AppApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({ app, client } = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('invokes GET /ping', async () => {
    const res = await client.get('/ping?msg=world').expect(200);
    expect(res.body).to.containEql({ greeting: 'Hello from LoopBack' });
  });
  it('status ', async () => {
    const res = await client.get('/ping?msg=world').expect(200);
    expect(res.status).equal(200);
  });
  it('type ', async () => {
    const res = await client.get('/ping?msg=world').expect(200);
    expect(res.body).has.property('greeting')
  });
  it('type ', async () => {
    const res = await client.get('/ping');
    expect(res.body).has.property('url')
  });
  it('type object ', async () => {
    const res = await client.get('/ping');
    expect(res.body).be.an.Object;
  });
});
