import React from 'react';
import { Image, Layout, Link, Notes, Text, Typeface } from 'spectacle';

import images from '../images';
import { secondary, gray } from '../theme';

/** ************************************************************************* */

export default class ReactUnderTheHood extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Notes>
          I believe that Fiber is the foundational to the upcoming asynchronous
          rendering in React.
        </Notes>
        <Image src={images.reactUnderTheHood.replace('/', '')} />

        <Link
          href="https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/"
          target="_blank"
        >
          <Text textAlign="center" textColor={gray} textFont="Fira Code">
            bogdan-lyashenko.github.io
          </Text>
        </Link>

        <Layout align="flex-start">
          <Text
            margin="1em 0"
            textAlign="left"
            textColor={secondary}
            textSize="2em"
          >
            <Typeface googleFont="Open Sans Condensed">
              Under the Hood ReactJS
            </Typeface>

            <Text textSize="0.5em">⭐️️️️️ ⭐️ ⭐</Text>
          </Text>
        </Layout>
      </React.Fragment>
    );
  }
}
