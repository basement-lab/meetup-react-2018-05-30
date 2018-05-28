import React from 'react';
import { Fit, Heading, Image, Layout, Slide } from 'spectacle';

import images from '../images';

/** ************************************************************************* */

export default (
  <Slide transition={['zoom']} bgColor="primary">
    <Heading size={1} fit lineHeight={1} textColor="black">
      What&apos;s new
    </Heading>
    <Fit>
      <Image
        src={images.react.replace('/', '')}
        margin="0px auto 40px"
      />
    </Fit>

    <Heading size={1} fit>
      React v16.3 <small>(&amp; v16.4)</small>
    </Heading>
  </Slide>
);
