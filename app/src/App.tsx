// tslint:disable-next-line:no-any
declare var module: { hot: any };

/** ************************************************************************* */

import * as React from 'react';
import { hot } from 'react-hot-loader';

import LoremIpsum from './LoremIpsum';

/** ************************************************************************* */

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>@demo/app</h1>
        <LoremIpsum />
      </div>
    );
  }
}

/** ************************************************************************* */

export default hot(module)(App);
