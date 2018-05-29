import React from 'react';
import {
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Notes,
  Slide,
  Text,
} from 'spectacle';

import { tertiary, white } from '../theme';

/** ************************************************************************* */

export default (
  <Slide data-id="react-16" id={1} goTo={2} bgColor={tertiary}>
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
  </Slide>
);
