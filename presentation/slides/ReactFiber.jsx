import React from 'react';
import { Heading, Image, Layout } from 'spectacle';

import { white } from '../theme';

import IMAGE from '../assets/isfiberreadyyet.png';

/** ************************************************************************* */

export default class ReactFiber extends React.Component {
  render() {
    return (
      <React.Fragment>
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
