import { DBBoilerplateModule } from 'src/modules/rest/db-boilerplate/db-boilerplate.module';
import { BoilerplateModule } from '../modules/rest';

export const internalRoutes = [
  {
    path: '/internal',
    module: DBBoilerplateModule,
    children: [
      {
        path: '/children',
        module: BoilerplateModule,
      },
    ],
  },
];
