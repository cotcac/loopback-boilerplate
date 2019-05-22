import { BootMixin } from '@loopback/boot';
import { ApplicationConfig } from '@loopback/core';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import { RepositoryMixin } from '@loopback/repository';
import { RestApplication } from '@loopback/rest';
import { ServiceMixin } from '@loopback/service-proxy';
import * as path from 'path';
import { MySequence } from './sequence';
import { DbDataSource } from './datasources';
import * as dotenv from 'dotenv';
export class AppApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);
    dotenv.config({ path: '.env' });

    // set up test enviroment.
    console.log(process.env.NODE_ENV, 'Enviroment');
    if (process.env.NODE_ENV === 'test') {
      const updatedDatasourceDb = Object.assign({}, DbDataSource, {
        name: 'testdb',
        connector: 'memory',
        file: 'data/test.json'
      });
      this.bind('datasources.config.db').to(updatedDatasourceDb);
    }
    // production
    if (process.env.NODE_ENV === 'production') {
      const updatedDatasourceDb = Object.assign({}, DbDataSource, {
        "name": "prodDB",
        "connector": "mysql",
        "url": "",
        "host": process.env.DATABASE_HOST,
        "port": process.env.MYSQL_PORT,
        "user": process.env.MYSQL_USER,
        "password": process.env.MYSQL_PASSWORD,
        "database": process.env.MYSQL_DATABASE
      });
      this.bind('datasources.config.db').to(updatedDatasourceDb);
    }


    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.bind(RestExplorerBindings.CONFIG).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }
}
