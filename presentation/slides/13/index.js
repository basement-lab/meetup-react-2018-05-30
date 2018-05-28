import React from 'react';

import { Appear, Heading, ListItem, List, Slide, SlideSet } from 'spectacle';

import Interactive from './interactive';

// import images from '../images';
// import theme from '../theme';

/** ************************************************************************* */

export default (
  <SlideSet>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <List>
        <Appear>
          <ListItem>Inline style based theme system</ListItem>
        </Appear>
        <Appear>
          <ListItem>Autofit text</ListItem>
        </Appear>
        <Appear>
          <ListItem>Flexbox layout system</ListItem>
        </Appear>
        <Appear>
          <ListItem>PDF export</ListItem>
        </Appear>
        <Appear>
          <ListItem>And...</ListItem>
        </Appear>
      </List>
    </Slide>
    <Slide transition={['slide']} bgColor="primary">
      <Heading size={1} caps fit textColor="tertiary">
        Your presentations are interactive
      </Heading>
      <Interactive />
    </Slide>
  </SlideSet>
);
