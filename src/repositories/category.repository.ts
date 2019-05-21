import { DefaultCrudRepository, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Category, Product } from '../models';
import { DbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class CategoryRepository extends DefaultCrudRepository<
  Category,
  typeof Category.prototype.id
  > {
  public readonly product: HasManyRepositoryFactory<
    Product,
    typeof Category.prototype.id
  >;
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Category, dataSource);
  }
}
