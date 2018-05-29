import React from 'react';
import {
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  Slide,
  Text,
} from 'spectacle';

import images from '../images';
import { tertiary, black, gray, white } from '../theme';

/** ************************************************************************* */

export default (
  <Slide
    data-id="init"
    id={0}
    goTo={1}
    transition={['zoom']}
    bgColor="white"
    bgImage={images.react.replace('/', '')}
    bgPostition="center"
    bgRepeat="no-repeat"
    controlColor={tertiary}
    progressColor={gray}
  >
    <Heading caps size={1} lineHeight={1} textColor={black}>
      What&apos;s new
    </Heading>

    <Heading bold caps size={4} textColor={black}>
      in
    </Heading>

    <Heading fit size={1} textColor="title">
      React 16
    </Heading>

    <Text lineHeight="1em" textSize="2em">
      (v16.3 &amp; v16.4)
    </Text>

    <Link
      href="https://github.com/basementlab/meetup-react-2018-05-30"
      target="_blank"
    >
      <Text caps fit size={4} textColor={black} textFont="Fira Code">
        <Image
          src={images.github.replace('/', '')}
          margin="0 0 -0.5em 0"
          height={'2em'}
          display="inline"
        />
        {'/basementlab/meetup-react-2018-05-30'}
      </Text>
    </Link>
  </Slide>
);
