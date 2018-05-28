import React from 'react';
import { Anim, Heading, Slide } from 'spectacle';

/** ************************************************************************* */

export default (
  <Slide transition={['slide']}>
    <Anim
      onAnim={(forwards, animIndex) => {
        /* eslint-disable */
        console.log('forwards ', forwards);
        console.log('animIndex ', animIndex);
        /* eslint-enable */
      }}
      fromStyle={{
        opacity: 0,
        transform: 'translate3d(0px, -100px, 0px)  scale(1) rotate(0deg)',
      }}
      toStyle={[
        {
          opacity: 1,
          transform: 'translate3d(0px, 0px, 0px)  scale(1) rotate(0deg)',
        },
        {
          opacity: 1,
          transform: 'translate3d(0px, 0px, 0px) scale(1.6) rotate(-15deg)',
        },
        {
          opacity: 1,
          transform: 'translate3d(0px, 0px, 0px)  scale(0.8) rotate(0deg)',
        },
        {
          opacity: 1,
          transform: 'translate3d(0px, -200px, 0px)  scale(0.8) rotate(0deg)',
        },
        {
          opacity: 1,
          transform: 'translate3d(200px, 0px, 0px)  scale(0.8) rotate(0deg)',
        },
        {
          opacity: 1,
          transform: 'translate3d(0px, 200px, 0px)  scale(0.8) rotate(0deg)',
        },
        {
          opacity: 1,
          transform: 'translate3d(-200px, 0px, 0px)  scale(0.8) rotate(0deg)',
        },
      ]}
      easing={'bounceOut'}
      transitionDuration={500}
    >
      <div>
        <Heading size={6} caps fit textColor="secondary">
          Flexible<br />animations
        </Heading>
      </div>
    </Anim>
  </Slide>
);
