import { Getter } from '@loopback/context';
import { UsersRepository } from '../../repositories';
import { testdb } from '../fixtures/datasources/testdb.datasource';

export async function givenEmptyDatabase() {
  const usersRepository = new UsersRepository(testdb);

  await usersRepository.deleteAll();
}
