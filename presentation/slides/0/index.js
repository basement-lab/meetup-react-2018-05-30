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

/** ************************************************************************* */

export default (
  <Slide
    id="title"
    goTo={2}
    transition={['zoom']}
    bgColor="white"
    bgImage={images.react.replace('/', '')}
    bgSize="600px"
    bgPostition="center"
    bgRepeat="no-repeat"
  >
    <Heading caps size={1} lineHeight={1} textColor="black">
      What&apos;s new
    </Heading>
    <Heading bold caps size={4} textColor="black">
      in
    </Heading>
    <Heading fit size={1} textColor="title">
      React 16
    </Heading>
    <Text lineHeight="1em">(v16.3 &amp; v16.4)</Text>
    <Link
      href="https://github.com/basementlab/meetup-react-2018-05-30"
      target="_blank"
    >
      <Text
        caps
        fit
        size={4}
        textColor="black"
        textFont="Fira Code"
        // textSize="1em"
        lineHeight="1em"
      >
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
