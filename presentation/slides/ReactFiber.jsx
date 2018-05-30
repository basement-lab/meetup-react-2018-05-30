import React from 'react';
import { Heading, Image, Layout, Notes } from 'spectacle';

import { white } from '../theme';

import IMAGE from '../assets/isfiberreadyyet.png';

/** ************************************************************************* */

export default class ReactFiber extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Notes>
          If you haven&apos;t looked into it, I&apos;ve got some resources for
          you.
          <h1>what IS it?</h1>
        </Notes>
        <Heading caps fit size={2} textColor={white}>
          React Fiber
        </Heading>
        <Layout>
          <Image src={IMAGE} margin="2em auto 40px" />
        </Layout>
      </React.Fragment>
    );
  }
}
