import React from 'react';
import { Deck, Slide } from 'spectacle';

import React16dot0 from './slides/React16.0.jsx';
import React16dot3 from './slides/React16.3.jsx';
import React16WhatsNew from './slides/React16WhatsNew.jsx';
import ReactFiber from './slides/ReactFiber.jsx';
import ReactFiberIs from './slides/ReactFiberIs.jsx';
import ReactFiberResources from './slides/ReactFiberResources.jsx';
import ReactLifecycleNew from './slides/ReactLifecycleNew.jsx';
import ReactLifecycleOld from './slides/ReactLifecycleOld.jsx';
import ReactLifecyclesCompare from './slides/ReactLifecyclesCompare.jsx';
import ReactUnderTheHood from './slides/ReactUnderTheHood.jsx';
import Sigint from './slides/Sigint.jsx';
import Sigterm from './slides/Sigterm.jsx';
import WhatIsReactFiber from './slides/WhatIsReactFiber.jsx';

import theme, { colors, transitions } from './theme';

import REACT_ICON from './assets/icon-react.png';

require('normalize.css');

/** ************************************************************************* */

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        contentHeight="90%"
        contentWidth="90%"
        theme={theme}
        // transition={['zoom', 'slide']}
        transition={['slide']}
        transitionDuration={1000}
      >
        <Slide
          id={0}
          bgColor={colors.white}
          bgImage={REACT_ICON}
          bgPostition="center"
          bgRepeat="no-repeat"
          controlColor={colors.tertiary}
          progressColor={colors.gray}
          transition={[
            'zoom',
            transitions.rotate(colors.grayDark, colors.white),
            // transitions.rotate(colors.white, colors.tertiary),
          ]}
        >
          <Sigint />
        </Slide>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

        <Slide
          id={1}
          bgColor={colors.tertiary}
          bgPostition="center"
          transition={[
            'fade',
            transitions.rotate(colors.tertiary, colors.tertiary),
          ]}
        >
          <React16dot0 />
        </Slide>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

        <Slide
          id={2}
          bgColor={colors.tertiary}
          controlColor={colors.gray}
          progressColor={colors.gray}
          transition={[
            'fade',
            // 'scale',
            // transitions.rotate(colors.tertiary, colors.tertiary),
          ]}
          transitionDuration={400}
        >
          <ReactFiber />
        </Slide>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

        <Slide
          id={3}
          controlColor={colors.gray}
          progressColor={colors.gray}
          transition={['fade']}
        >
          <WhatIsReactFiber />
        </Slide>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

        <Slide
          id={4}
          bgColor={colors.tertiary}
          controlColor={colors.gray}
          progressColor={colors.gray}
          transition={['slide']}
        >
          <ReactFiberIs />
        </Slide>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

        <Slide
          id={5}
          controlColor={colors.tertiary}
          progressColor={colors.tertiary}
          transition={['slide', 'zoom']}
        >
          <ReactUnderTheHood />
        </Slide>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

        <Slide
          id={6}
          bgColor={colors.grayDark}
          controlColor={colors.secondary}
          progressColor={colors.white}
          transition={['zoom']}
        >
          <ReactFiberResources />
        </Slide>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

        <Slide
          id={7}
          bgColor={colors.tertiary}
          transition={[
            'fade',
            transitions.rotate(colors.tertiary, colors.tertiary),
          ]}
        >
          <React16dot3 />
        </Slide>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

        <Slide
          id={8}
          bgColor={colors.tertiary}
          controlColor={colors.gray}
          progressColor={colors.gray}
          transition={[
            'fade',
            transitions.rotate(colors.tertiary, colors.white),
          ]}
        >
          <React16WhatsNew />
        </Slide>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

        <Slide
          id={9}
          bgColor={colors.black}
          controlColor={colors.tertiary}
          progressColor={colors.gray}
          transition={['spin', 'zoom']}
        >
          <ReactLifecycleOld />
        </Slide>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

        <Slide
          id={10}
          bgColor={colors.tertiary}
          controlColor={colors.gray}
          progressColor={colors.gray}
          transition={['spin', 'zoom']}
        >
          <ReactLifecycleNew />
        </Slide>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

        <Slide
          id={11}
          bgColor={colors.grayDark}
          controlColor={colors.gray}
          progressColor={colors.gray}
          transition={['slide']}
        >
          <ReactLifecyclesCompare />
        </Slide>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

        <Slide
          id={12}
          bgColor={colors.white}
          controlColor={colors.tertiary}
          transition={['fade']}
        >
          <Sigterm />
        </Slide>
      </Deck>
    );
  }
}
