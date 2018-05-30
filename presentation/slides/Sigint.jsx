import React from 'react';
import { Heading, Image, Link, Notes, Text } from 'spectacle';
import styled from 'react-emotion';

import { black } from '../theme';

import GITHUB_ICON from '../assets/icon-github.png';

/** ************************************************************************* */

const Small = styled(Text)`
  line-height: 1em;
`;

const Img = styled(Image)`
  height: 2em;
`;

/** ************************************************************************* */

export default class Sigint extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Notes>First. A little about me...</Notes>
        <Heading caps size={1} lineHeight={1} textColor={black}>
          What&apos;s new
        </Heading>

        <Heading bold caps size={4} textColor={black}>
          in
        </Heading>

        <Heading fit size={1} textColor="title">
          React 16
        </Heading>

        <Small textSize="2em">(v16.3 &amp; v16.4)</Small>

        <Link
          href="https://github.com/basementlab/meetup-react-2018-05-30"
          target="_blank"
        >
          <Text caps fit size={4} textColor={black} textFont="Fira Code">
            <Img src={GITHUB_ICON} margin="0 0 -0.5em 0" display="inline" />
            {'/basement-lab/meetup-react-2018-05-30'}
          </Text>
        </Link>
      </React.Fragment>
    );
  }
}
