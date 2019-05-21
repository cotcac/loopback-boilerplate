import { Client, expect } from '@loopback/testlab';
import { AppApplication } from '../..';
import { setupApplication } from './test-helper';
// in your test file
import { givenEmptyDatabase, givenCategory } from '../helpers/database.helpers';
describe('categoriesController', () => {
  let app: AppApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({ app, client } = await setupApplication());
    givenEmptyDatabase().then(r => {
      console.log(r);
    });
    givenCategory({ name: 'this is me' }).then(e => {
      console.log(e, '---- category');
    });
  });

  after(async () => {
    await app.stop();
  });

  // insert hero fail
  it('Insert fails', async () => {
    const res = await client.post('/categories/');
    expect(res.status).equal(422);
    expect(res.body).to.be.an.Object;
    expect(res.body).has.property('error');
    expect(res.body.error).has.property('message');
    expect(res.body.error).to.be.a.String;
  })
  // Insert hero work
  it('Insert works:', async () => {
    const res = await client.post('/categories')
      .send({ name: 'supper man' })
    expect(res.status).equal(200);
    expect(res.body).to.be.an.Object;
    expect(res.body).has.property('id');
    console.log(res.body);

  })
  // single hero
  it('Single:', async () => {
    const categories = await client.get('/categories/')
    const first = categories.body[0].id;
    const res = await client.get(`/categories/${first}`);
    expect(res.status).equal(200);
  })
  // Update
  it('Update:', async () => {
    const categories = await client.get('/categories/')
    const first = categories.body[0].id;
    const res = await client.patch(`/categories/${first}`)
      .send({ name: 'Update name' })
    expect(res.status).equal(204);
  })
  // count
  it('Count:', async () => {
    const res = await client.get('/categories/count')
    expect(res.status).equal(200)
    expect(res.body).to.be.an.Object;
    expect(res.body).has.property('count')
    expect(res.body.count).to.be.a.Number
  })
  // list
  it('List:', async () => {
    const res = await client.get('/categories')
    expect(res.status).equal(200);
    expect(res.body).to.be.an.Array;
    console.log(res.body);
  })
  // delete first item.
  it('Delete 1 item', async () => {
    const categories = await client.get('/categories/')
    const first = categories.body[0].id;
    const res = await client.delete(`/categories/${first}`)
    expect(res.status).equal(204)
  })
});
