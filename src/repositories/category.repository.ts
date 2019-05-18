import { DefaultCrudRepository, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Category, Product } from '../models';
import { DbDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { ProductRepository } from './product.repository';

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
    @repository.getter('ProductRepository')
    getProductRepository: Getter<ProductRepository>,
  ) {
    super(Category, dataSource);
    this.product = this.createHasManyRepositoryFactoryFor(
      'products',
      getProductRepository,
    );
  }
}
