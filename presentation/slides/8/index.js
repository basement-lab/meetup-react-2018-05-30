import React from 'react';
import { Fill, Heading, Layout, Slide } from 'spectacle';

// import images from '../images';
// import theme from '../theme';

/** ************************************************************************* */

export default (
  <Slide transition={['zoom', 'fade']} bgColor="primary">
    <Heading caps fit>
      Flexible Layouts
    </Heading>
    <Layout>
      <Fill>
        <Heading
          size={4}
          caps
          textColor="secondary"
          bgColor="white"
          margin={10}
        >
          Left
        </Heading>
      </Fill>
      <Fill>
        <Heading
          size={4}
          caps
          textColor="secondary"
          bgColor="white"
          margin={10}
        >
          Right
        </Heading>
      </Fill>
    </Layout>
  </Slide>
);
