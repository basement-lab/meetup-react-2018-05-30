import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { default as App } from './App';
ReactDOM.render(
  <App />,
  // <ApolloProvider client={client}>
  // <App />,
  // </ApolloProvider>,
  document.getElementById('root'),
);
