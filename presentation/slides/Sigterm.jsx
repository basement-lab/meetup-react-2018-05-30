import React from 'react';
import { Notes, Text } from 'spectacle';

import { tertiary } from '../theme';

/** ************************************************************************* */

export default class Sigterm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Notes>Savi start date - Feb. 7th, 2018</Notes>
        <Text caps fit size={1} textColor={tertiary} textFont="Fira Code">
          sigterm
        </Text>
      </React.Fragment>
    );
  }
}
