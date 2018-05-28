import React from 'react';
import { Heading, Image, Slide } from 'spectacle';

import images from '../images';

/** ************************************************************************* */

export default (
  <Slide
    onActive={slideIndex => {
      console.info(`Viewing slide index: ${slideIndex}.`); // eslint-disable-line no-console
    }}
    id="wait-what"
    goTo={4}
    transition={[
      'fade',
      (transitioning, forward) => {
        const angle = forward ? -180 : 180;
        return {
          transform: `
            translate3d(0%, ${transitioning ? 100 : 0}%, 0)
            rotate(${transitioning ? angle : 0}deg)
          `,
          backgroundColor: transitioning ? '#26afff' : '#000',
        };
      },
    ]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Image src={images.kat.replace('/', '')} margin="0px auto 40px" />
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      Wait what?
    </Heading>
  </Slide>
);
