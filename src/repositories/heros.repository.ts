import {DefaultCrudRepository} from '@loopback/repository';
import {Heros} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HerosRepository extends DefaultCrudRepository<
  Heros,
  typeof Heros.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Heros, dataSource);
  }
}
