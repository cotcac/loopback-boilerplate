import { Entity, model, property } from '@loopback/repository';

@model({ settings: { strict: false } })
export class Category extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Category>) {
    super(data);
  }
}
