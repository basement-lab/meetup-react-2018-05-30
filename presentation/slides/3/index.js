import React from 'react';
import {
  Appear,
  Fill,
  Heading,
  Image,
  Layout,
  Notes,
  Slide,
  Text,
} from 'spectacle';

import { tertiary, black, gray } from '../theme';

/** ************************************************************************* */

export default (
  <Slide
    data-id="what-is-react-fiber"
    id={3}
    goTo={4}
    controlColor={gray}
    progressColor={gray}
  >
    <Notes>
      <ol>
        <li>&quot;an optimization algorithm&quot;</li>
        <li>
          &quot;React&apos;s CORE <i>reconciliation</i> algorithm&quot;
        </li>
      </ol>
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
  </Slide>
);
