import React from 'react';
import { Appear, Heading, Notes } from 'spectacle';

import { tertiary, black, gray } from '../theme';

/** ************************************************************************* */
export default class WhatIsReactFiber extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Notes>
          <ol>
            <li>&quot;an optimization algorithm&quot;</li>
            <li>
              &quot;React&apos;s CORE <i>reconciliation</i> algorithm&quot;
            </li>
          </ol>
          <h1>in short...</h1>
        </Notes>

        <Heading size={3} fit textColor={tertiary}>
          What is React Fiber?
        </Heading>

        <Appear order={1}>
          <Heading fit size={3} textColor={gray}>
            an optimization algorithm
          </Heading>
        </Appear>

        <Appear order={2}>
          <Heading fit size={3} margin="0.5em 0 0 0" textColor={black}>
            React&apos;s CORE <i>reconciliation</i> algorithm
          </Heading>
        </Appear>
      </React.Fragment>
    );
  }
}
