import React from 'react';
import { Appear, Heading, Notes, S, Text } from 'spectacle';

import { white } from '../theme';

/** ************************************************************************* */

export default class React16dot0 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Notes>
          aprox. 8 months ago
          <br />
          <h4>New</h4>
          <ul>
            <li>Fragments</li>
            <li>
              Portals - provide a first-class way to render children into a DOM
              node that exists outside the DOM hierarchy of the parent
              component.
            </li>
            <li>
              a stable API for error boundaries, using `componentDidCatch`
            </li>
            <li>
              NOTE: Dependens on `requestAnimationFrame` (even in testing)
            </li>
            <li>under the MIT license</li>
          </ul>
          <h4>Deprications</h4>
          <ul>
            <li>
              Use `ReactDOM.hydrate`` instead of `ReactDOM.render` server-side
            </li>
            <li>React Addons (use `react-addons`perf`)</li>
          </ul>
          <h1>and of course...</h1>
          React 16.0 introduced React Fiber
        </Notes>
        <Heading size={2} fit textColor={white}>
          React v16.0
        </Heading>
        <Appear>
          <Text caps textColor={white} textSize="3em">
            September 26, 2017
          </Text>
        </Appear>
        <Text caps textColor={white} textSize="1em">
          First <S type="italic">major</S> &nbsp;version update EVER!
        </Text>
      </React.Fragment>
    );
  }
}
