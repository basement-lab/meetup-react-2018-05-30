import React from 'react';
import { Fill, Heading, Image, Layout, Link, Text } from 'spectacle';

import { gray, white } from '../theme';

import OLD_LIFECYCLE from '../assets/react-lifecycle-old.jpg';

/** ************************************************************************* */

export default class ReactLifecycleOld extends React.Component {
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
              Lifecycle &lt;16.3
            </Heading>
          </Fill>
        </Layout>

        <Layout>
          <Fill>
            <Image src={OLD_LIFECYCLE} width="70%" />
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
                textColor={gray}
                textFont="Fira Code"
              >
                @sstur_
              </Text>
            </Link>
          </Fill>
        </Layout>
      </React.Fragment>
    );
  }
}
