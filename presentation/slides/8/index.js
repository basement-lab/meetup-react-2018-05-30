import React from 'react';
import {
  Appear,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  Slide,
  Text,
} from 'spectacle';

import images from '../images';
import { primary, secondary, tertiary, gray, grayDark, white } from '../theme';

/** ************************************************************************* */

export default (
  <Slide
    data-id="react-fiber"
    id={8}
    goTo={9}
    transition={[
      'fade',
      (transitioning, forward) => {
        const angle = forward ? -180 : 180;

        return {
          transform: `
            translate3d(0%, ${transitioning ? 100 : 0}%, 0)
            rotate(${transitioning ? angle : 0}deg)
          `,
          backgroundColor: transitioning ? tertiary : white,
        };
      },
    ]}
    bgColor={tertiary}
    controlColor={gray}
    progressColor={gray}
  >
    <Heading size={1} textColor={grayDark}>
      so, what&apos;s new
    </Heading>
    <Appear order={1}>
      <Heading size={2} caps fit textColor={tertiary}>
        <small>new</small> Lifecycles
      </Heading>
    </Appear>

    <Appear order={2}>
      <Heading size={2} caps fit textColor={tertiary}>
        <small>new</small> Context API
      </Heading>
    </Appear>

    <Link
      href="https://reactjs.org/blog/2018/03/29/react-v-16-3.html"
      target="_blank"
    >
      <Text size={4} textColor={gray} textFont="Fira Code">
        React Blog - v16.3 Announcement
      </Text>
    </Link>
  </Slide>
);
