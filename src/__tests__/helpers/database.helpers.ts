import { HerosRepository, CategoryRepository, ProductRepository } from '../../repositories';
import { testdb } from '../fixtures/datasources/testdb.datasource';

import { Heros, Category, Product } from '../../models';
import { Getter } from '@loopback/core';

export async function givenEmptyDatabase() {
  console.log('delete data');
  await new HerosRepository(testdb).deleteAll();
  await new CategoryRepository(testdb).deleteAll();
}
export function givenData(data?: Partial<Heros>) {
  return Object.assign(
    {
      name: 'a category name',
    }, data
  );
}

export async function givenHeros(data?: Partial<Heros>) {
  return await new HerosRepository(testdb).create(givenData(data));
}

export function categoryData(data?: Partial<Heros>) {
  return Object.assign({
    name: 'A category'
  })
}

export async function givenCategory(data?: Partial<Category>) {
  return await new CategoryRepository(testdb).create(categoryData(data));
}

export function productData(data?: Partial<Product>) {
  return Object.assign({
    name: 'A category',
    price: 1234
  })
}
