import React from 'react';
import { Heading, Link, Notes, Text } from 'spectacle';

import { colors } from '../theme';

/** ************************************************************************* */

export default class Sigterm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Notes>Savi start date - Feb. 7th, 2018</Notes>
        <Text
          caps
          fit
          size={1}
          textColor={colors.tertiary}
          textFont="Fira Code"
        >
          The End
        </Text>
        <Link href="https://twitter.com/derekclair">
          <Heading
            fill
            italic
            margin="1em 0 0"
            size={1}
            textColor={colors.grayDark}
          >
            @derekclair
          </Heading>
        </Link>
        <Link href="https://github.com/derekclair">
          <Heading
            fill
            italic
            margin="1em 0 0"
            size={1}
            textColor={colors.grayDark}
          >
            github.com/derekclair
          </Heading>
        </Link>
      </React.Fragment>
    );
  }
}
