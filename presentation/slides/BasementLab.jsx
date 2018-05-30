import React from 'react';
import PropTypes from 'prop-types';
import { Appear, Heading, Image, Layout, Link, Notes, Text } from 'spectacle';
import styled from 'react-emotion';

import { colors } from '../theme';

import THE_LAB from '../assets/basement-lab.jpg';

/** ************************************************************************* */

const Name = styled(Heading)`
  max-width: 50%;
  text-align: center;
  margin-left: 25%;
`;

const Wrapper = styled('div')`
  margin-left: 3em 0;
`;

/** ************************************************************************* */

export default class BasementLab extends React.Component {
  static propTypes = {
    steps: PropTypes.any,
  };

  static Image = THE_LAB;

  render() {
    return (
      <React.Fragment>
        <Notes>
          Hello, I&apos;m Derek
          <h3>find me at</h3>
          where I spend most of my time...
          <h1>working for</h1>
        </Notes>
        <Appear order={2}>
          <Heading
            margin="-2em 0 1em 0"
            size={1}
            caps
            fit
            textColor={colors.translucent}
          >
            Basement Lab
          </Heading>
        </Appear>

        <Name size={1} caps fit textColor={colors.primary}>
          Derek Clair
        </Name>

        <Appear order={1}>
          <Wrapper>
            <Link
              margin="margin: 1.5em 0"
              href="https://twitter.com/derekclair"
              target="_blank"
            >
              <Text
                margin="0.5em 0"
                size={1}
                textColor={colors.tertiary}
                textFont="Fira Code"
                textSize={60}
              >
                github.com/derekclair
              </Text>
            </Link>
            <Link
              margin="margin: 1.5em 0"
              href="https://twitter.com/derekclair"
              target="_blank"
            >
              <Text
                margin="0.5em 0"
                size={1}
                textColor={colors.tertiary}
                textFont="Montserrat"
                textSize={60}
              >
                @derekclair
              </Text>
            </Link>
          </Wrapper>
        </Appear>

        {/* <Heading size={4} caps textColor={colors.grayDark}>
          Steps: {this.props.steps}
        </Heading> */}
      </React.Fragment>
    );
  }
}
