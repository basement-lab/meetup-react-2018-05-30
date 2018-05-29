import React from 'react';
import { Appear, Heading, Notes, Slide, Text } from 'spectacle';

import { tertiary, white } from '../theme';

/** ************************************************************************* */

export default (
  <Slide
    data-id="react-16.3"
    id={7}
    goTo={8}
    transition={['slide']}
    bgColor={tertiary}
  >
    <Notes>React 16.0 introduced React Fiber</Notes>
    <Heading size={2} fit textColor={white}>
      React v16.3
    </Heading>
    <Text caps textColor={white} textSize="3em">
      March 29, 2018
    </Text>
  </Slide>
);
