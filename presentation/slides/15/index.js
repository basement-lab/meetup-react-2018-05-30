import React from 'react';

import { Heading, Image, Link, Slide } from 'spectacle';

import images from '../images';

/** ************************************************************************* */

export default (
  <Slide transition={['spin', 'slide']} bgColor="tertiary">
    <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
      Made with love in Seattle by
    </Heading>
    <Link href="http://www.formidable.com">
      <Image width="100%" src={images.logo} />
    </Link>
  </Slide>
);
