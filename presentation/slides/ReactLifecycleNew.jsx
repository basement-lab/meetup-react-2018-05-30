import React from 'react';
import { Fill, Heading, Image, Layout, Link, Text } from 'spectacle';

import { grayDark, white } from '../theme';

import NEW_LIFECYCLE from '../assets/react-lifecycle-new.jpg';

/** ************************************************************************* */

export default class ReactLifecycleNew extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Fill>
            <Heading
              fill
              margin="0 0 1em 0"
              size={2}
              textColor={white}
              textFont="Fira Code"
            >
              Lifecycle &gt;=16.3
            </Heading>
          </Fill>
        </Layout>

        <Layout>
          <Fill>
            <Image fill src={NEW_LIFECYCLE} width="85%" />
          </Fill>
        </Layout>

        <Layout>
          <Fill>
            <Link
              href="https://twitter.com/dan_abramov/status/981712092611989509"
              target="_blank"
            >
              <Text
                fill
                margin="2em 0 0 0"
                size={4}
                textColor={grayDark}
                textFont="Fira Code"
              >
                @dan_abramov
              </Text>
            </Link>
          </Fill>
        </Layout>
      </React.Fragment>
    );
  }
}
