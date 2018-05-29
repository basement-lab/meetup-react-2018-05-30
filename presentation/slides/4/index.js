import React from 'react';
import { Appear, Heading, Image, Notes, Slide } from 'spectacle';

import { tertiary, gray, white } from '../theme';

/** ************************************************************************* */

export default (
  <Slide
    data-id="react-fiber-is"
    id={4}
    goTo={5}
    bgColor={tertiary}
    transition={['slide']}
    controlColor={gray}
    progressColor={gray}
  >
    <Notes>
      Not that the previous reconciliation algorithm wasn&apos;t, but just
      sayn&apos;
    </Notes>
    <Heading margin="1em 0 0 0" size={1} textColor={white}>
      a
    </Heading>

    <Heading fit italic size={1} textColor={white}>
      hella&apos; gnarly
    </Heading>

    <Heading fill margin="2em 0 0 0" size={1} textColor={white}>
      reconciliation algorithm
    </Heading>
  </Slide>
);
