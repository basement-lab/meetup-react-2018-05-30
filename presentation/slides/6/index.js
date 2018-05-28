import React from 'react';
import { GoToAction, Heading, Slide } from 'spectacle';

import theme from '../theme';

/** ************************************************************************* */

export default (
  <Slide>
    <Heading size={2} textColor="secondary" margin="0.25em">
      Mix it up!
    </Heading>
    <Heading size={6} textColor="tertiary">
      You can even jump to different slides with a standard button or custom
      component!
    </Heading>
    <GoToAction margin="1em" slide={8}>
      Jump to Slide 8
    </GoToAction>
    <GoToAction
      render={goToSlide => (
        <select
          defaultValue=""
          style={{
            background: '#000',
            color: '#fff',
            fontFamily: theme.print.fonts.primary,
            fontSize: '1.1em',
          }}
          onChange={({ target }) => goToSlide(target.value)}
        >
          <option value="" disabled>
            Custom Slide Picker
          </option>
          <option value="wait-what">Wait What!? Slide</option>
          <option value={3}>Slide 3</option>
        </select>
      )}
    />
  </Slide>
);
