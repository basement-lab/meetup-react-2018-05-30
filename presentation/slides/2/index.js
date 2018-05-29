import React from 'react';
import { Fill, Fit, Heading, Image, Layout, Slide } from 'spectacle';

import images from '../images';
import { primary, secondary, tertiary, gray, white } from '../theme';

/** ************************************************************************* */

export default (
  <Slide
    data-id="react-fiber"
    id={2}
    goTo={3}
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
    <Heading size={2} caps fit textColor={tertiary}>
      React Fiber
    </Heading>
    <Layout>
      <Image
        src={images.isfiberreadyyet.replace('/', '')}
        margin="2em auto 40px"
      />
    </Layout>
  </Slide>
);
