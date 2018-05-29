import React, { Component } from 'react';

import { Deck, Slide } from 'spectacle';
import slides from './slides';
import theme from './slides/theme';

require('normalize.css');

/** ************************************************************************* */

export default class Presentation extends Component {
  state = {
    steps: 0,
  };

  render() {
    return (
      <Deck
        contentHeight="90%"
        contentWidth="90%"
        transition={['zoom', 'slide']}
        theme={theme}
        transitionDuration={500}
      >
        {slides.length ? (
          slides.map((slide, key) => {
            return React.cloneElement(slide, {
              key,
            });
          })
        ) : (
          <Slide />
        )}
      </Deck>
    );
  }

  updateSteps(steps) {
    if (this.state.steps !== steps) {
      this.setState({ steps });
    }
  }
}
