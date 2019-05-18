import { juggler } from '@loopback/repository';

export const testdb: juggler.DataSource = new juggler.DataSource({
  name: 'testdb',
  connector: 'memory',
  file: 'data/test.json'
});
