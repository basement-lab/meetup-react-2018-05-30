import React from 'react';
import { Appear, Heading, Slide } from 'spectacle';

/** ************************************************************************* */

export default (
  <Slide transition={['slide']} bgDarken={0.75} getAnimStep={this.updateSteps}>
    <Appear>
      <Heading size={1} caps textColor="tertiary">
        Can
      </Heading>
    </Appear>
    <Appear>
      <Heading size={1} caps textColor="secondary">
        Count
      </Heading>
    </Appear>
    <Appear>
      <Heading size={1} caps textColor="tertiary">
        Steps
      </Heading>
    </Appear>
    <Heading size={1} caps fit textColor="secondary">
      Steps: {this.state.steps}
    </Heading>
  </Slide>
);
