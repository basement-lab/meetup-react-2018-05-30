import React from 'react';
import { Heading, Notes, Text } from 'spectacle';

import { white } from '../theme';

/** ************************************************************************* */

export default class React16dot3 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Notes>Savi start date - Feb. 7th, 2018</Notes>
        <Heading size={2} fit textColor={white}>
          React v16.3
        </Heading>
        <Text caps textColor={white} textSize="3em">
          March 29, 2018
        </Text>
      </React.Fragment>
    );
  }
}
