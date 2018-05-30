import React from 'react';
import { Heading, Notes, Text } from 'spectacle';

import { white } from '../theme';

/** ************************************************************************* */

export default class React16dot0 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Notes>React 16.0 introduced React Fiber</Notes>
        <Heading size={2} fit textColor={white}>
          React v16.0
        </Heading>
        <Text caps textColor={white} textSize="3em">
          September 26, 2017
        </Text>
        <Text caps textColor={white} textSize="1em">
          First <i>major</i> version update EVER!
        </Text>
      </React.Fragment>
    );
  }
}
