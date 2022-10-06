import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";

export const GraphQLDriverModule = GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), './src/schema.gql'),
  playground: false,
  path: '/graphql',
  formatError: (error: any) => {
    let graphQLFormattedError: any = {
      message: error.extensions?.response?.message[0] || error.message,
      messages: error.extensions?.response?.message || [error.message],
      code: error.extensions?.code || error?.code || 'SERVER_ERROR',
      statusCode: error.extensions?.response?.statusCode || 500,
      name: error.extensions?.name || error.name,
    };

    if (process.env.NODE_ENV !== 'prod') {
      graphQLFormattedError.stack =
        error.extensions?.exception?.stacktrace || error.stack;
    }

    return graphQLFormattedError;
  },
});
