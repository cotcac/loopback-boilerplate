import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Heros} from '../models';
import {HerosRepository} from '../repositories';

export class HerosController {
  constructor(
    @repository(HerosRepository)
    public herosRepository : HerosRepository,
  ) {}

  @post('/heros', {
    responses: {
      '200': {
        description: 'Heros model instance',
        content: {'application/json': {schema: {'x-ts-type': Heros}}},
      },
    },
  })
  async create(@requestBody() heros: Heros): Promise<Heros> {
    return await this.herosRepository.create(heros);
  }

  @get('/heros/count', {
    responses: {
      '200': {
        description: 'Heros model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Heros)) where?: Where,
  ): Promise<Count> {
    return await this.herosRepository.count(where);
  }

  @get('/heros', {
    responses: {
      '200': {
        description: 'Array of Heros model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Heros}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Heros)) filter?: Filter,
  ): Promise<Heros[]> {
    return await this.herosRepository.find(filter);
  }

  @patch('/heros', {
    responses: {
      '200': {
        description: 'Heros PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() heros: Heros,
    @param.query.object('where', getWhereSchemaFor(Heros)) where?: Where,
  ): Promise<Count> {
    return await this.herosRepository.updateAll(heros, where);
  }

  @get('/heros/{id}', {
    responses: {
      '200': {
        description: 'Heros model instance',
        content: {'application/json': {schema: {'x-ts-type': Heros}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Heros> {
    return await this.herosRepository.findById(id);
  }

  @patch('/heros/{id}', {
    responses: {
      '204': {
        description: 'Heros PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() heros: Heros,
  ): Promise<void> {
    await this.herosRepository.updateById(id, heros);
  }

  @put('/heros/{id}', {
    responses: {
      '204': {
        description: 'Heros PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() heros: Heros,
  ): Promise<void> {
    await this.herosRepository.replaceById(id, heros);
  }

  @del('/heros/{id}', {
    responses: {
      '204': {
        description: 'Heros DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.herosRepository.deleteById(id);
  }
}
