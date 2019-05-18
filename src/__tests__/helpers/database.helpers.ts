import { HerosRepository } from '../../repositories';
import { testdb } from '../fixtures/datasources/testdb.datasource';

import { Heros } from '../../models';

export async function givenEmptyDatabase() {
  console.log('delete data');
  await new HerosRepository(testdb).deleteAll();
}
export function givenData(data?: Partial<Heros>) {
  return Object.assign(
    {
      name: 'a-product-name',
    }, data
  );
}

export async function givenHeros(data?: Partial<Heros>) {
  return await new HerosRepository(testdb).create(givenData(data));
}
