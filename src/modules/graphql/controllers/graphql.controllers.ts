import { Controller, Get } from '@nestjs/common';
import {
  renderPlaygroundPage,
  RenderPageOptions as PlaygroundRenderPageOptions,
} from '@apollographql/graphql-playground-html';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('GraphQL Route')
@Controller()
export class GraphQLController {
  constructor() {}

  @Get('/playground')
  getGraphql(): string {
    if (process.env.NODE_ENV === 'prod') {
      return 'Silence is golden';
    }
    const playgroundRenderPageOptions: PlaygroundRenderPageOptions = {
      endpoint: '/graphql',
    };
    const playground = renderPlaygroundPage(playgroundRenderPageOptions);
    return playground;
  }
}
