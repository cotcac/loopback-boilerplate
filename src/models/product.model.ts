import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Category } from './category.model';

@model({ settings: { strict: false } })
export class Product extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @belongsTo(() => Category)
  categoryId: number;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}
