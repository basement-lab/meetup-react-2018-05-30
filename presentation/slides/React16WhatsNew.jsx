import React from 'react';
import { Appear, Heading, Link, Text } from 'spectacle';

import { tertiary, gray, grayDark } from '../theme';

/** ************************************************************************* */

export default class React16WhatsNew extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} textColor={grayDark}>
          so, what&apos;s new
        </Heading>
        <Appear order={1}>
          <Heading size={2} caps fit textColor={tertiary}>
            <small>new</small> Lifecycles
          </Heading>
        </Appear>

        <Appear order={2}>
          <Heading size={2} caps fit textColor={tertiary}>
            <small>new</small> Context API
          </Heading>
        </Appear>

        <Link
          href="https://reactjs.org/blog/2018/03/29/react-v-16-3.html"
          target="_blank"
        >
          <Text
            margin="2em auto"
            size={4}
            textColor={gray}
            textFont="Fira Code"
          >
            React Blog - v16.3 Announcement
          </Text>
        </Link>
      </React.Fragment>
    );
  }
}
