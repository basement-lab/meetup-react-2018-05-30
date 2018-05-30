import React from 'react';
import {
  Appear,
  Fit,
  Heading,
  Image,
  Layout,
  Notes,
  Slide,
  Text,
} from 'spectacle';

import { primary, tertiary } from '../theme';
import images from '../images';

/** ************************************************************************* */

export default (
  <Slide goTo={4} transition={['slide']}>
    <Notes>
      React Router v1 - February, 2016 (React v0.14)
      <ul>
        <li>was implemented with a Mixin</li>
        <li />
        <li>JSX Spec Introduced - September 03, 2014 (React v0.11.1)</li>
      </ul>
      <br />
      React Router v2 - October 07, 2015 (still v0.14, but weeks away from
      v0.15)
      <ul>
        <li>utilized the &quot;un-official&quot;</li>
      </ul>
    </Notes>
    <Heading size={3} caps fit textColor="secondary">
      Who uses Context
    </Heading>
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
  </Slide>
);
