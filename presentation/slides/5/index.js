import React from 'react';
import {
  Heading,
  Image,
  Layout,
  Link,
  Notes,
  Slide,
  Text,
  Typeface,
} from 'spectacle';

import images from '../images';
import { secondary, tertiary, gray } from '../theme';

/** ************************************************************************* */

export default (
  <Slide
    data-id="react-under-the-hood"
    id={5}
    goTo={6}
    transition={['zoom', 'slide']}
    controlColor={tertiary}
    progressColor={tertiary}
  >
    <Image src={images.reactUnderTheHood.replace('/', '')} />

    <Link
      href="https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/"
      target="_blank"
    >
      <Text textAlign="center" textColor={gray} textFont="Fira Code">
        bogdan-lyashenko.github.io
      </Text>
    </Link>

    <Layout align="flex-start">
      <Text
        margin="1em 0"
        textAlign="left"
        textColor={secondary}
        textSize="2em"
      >
        <Typeface googleFont="Open Sans Condensed">
          Under the Hood ReactJS
        </Typeface>

        <Text textSize="0.5em">⭐️️️️️ ⭐️ ⭐</Text>
      </Text>
    </Layout>
  </Slide>
);
