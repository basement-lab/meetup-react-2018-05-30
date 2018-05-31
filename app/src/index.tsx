import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { ApolloClient } from 'apollo-client';
// import { ApolloProvider } from 'react-apollo';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { ApolloLink } from 'apollo-link';
// import { withClientState } from 'apollo-link-state';
// import { HttpLink } from 'apollo-link-http';

// import { resolvers, defaults } from './store';
import { default as App } from './App';

// const cache = new InMemoryCache();

// const stateLink = withClientState({
//   resolvers,
//   // resolvers: {
//   //   Mutation: {
//   //     visibilityFilter: (_, { filter }, { cache }) => {
//   //       cache.writeData({ data: { visibilityFilter: filter } });
//   //       return null;
//   //     },

//   //     addTodo: (_, { text }, { cache }) => {
//   //       const query = gql`
//   //         query GetTodos {
//   //           todos @client {
//   //             id
//   //             text
//   //             completed
//   //           }
//   //         }
//   //       `;
//   //       const previous = cache.readQuery({ query });

//   //       const newTodo = {
//   //         id: nextTodoId++,
//   //         text,
//   //         completed: false,
//   //         __typename: 'TodoItem',
//   //       };

//   //       const data = {
//   //         todos: previous.todos.concat([newTodo]),
//   //       };

//   //       cache.writeData({ data });

//   //       return newTodo;
//   //     },
//   //   },
//   // },
//   cache,
//   defaults,
// });

// const client = new ApolloClient({
//   cache,
//   link: ApolloLink.from([stateLink, new HttpLink()]),
// });

// const client = new ApolloClient({
//   uri: 'https://localhost:9001/graphql',
//   fetchOptions: {
//     credentials: 'include'
//   },
//   request: async (operation) => {
//     const token = await AsyncStorage.getItem('token');
//     operation.setContext({
//       headers: {
//         authorization: token
//       }
//     });
//   },
//   onError: ({ graphQLErrors, networkError }) => {
//     if (graphQLErrors) { sendToLoggingService(graphQLErrors);
//     if (networkError) logoutUser();
//   },
//   clientState: {
//     defaults: {
//       isConnected: true
//     },
//     resolvers: {
//       Mutation: {
//         updateNetworkStatus: (_, { isConnected }, { cache }) => {
//           cache.writeData({ data: { isConnected }});
//           return null;
//         }
//       }
//     }
//   },
//   cacheRedirects: {
//     Query: {
//       movie: (_, { id }, { getCacheKey }) =>
//         getCacheKey({ __typename: 'Movie', id });
//     }
//   }
// });

// const client = new ApolloClient({
//   // uri: process.env.GRAPHQL_URI,
//   clientState: {
//     defaults: ,
//     resolvers,
//     typeDefs,
//   },
// });

ReactDOM.render(
  <App />,
  // <ApolloProvider client={client}>
  // <App />,
  // </ApolloProvider>,
  document.getElementById('root'),
);
