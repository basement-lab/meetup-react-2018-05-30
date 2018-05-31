/* eslint-disable */

import React from 'react';
import {
  Appear,
  Fit,
  Heading,
  Image,
  Layout,
  List as L,
  ListItem as Li,
  Notes,
  S,
  Slide,
  Text,
} from 'spectacle';
import styled from 'react-emotion';

import { colors } from '../theme';

/** ************************************************************************* */

const textSize = '3em';

/** ************************************************************************* */

const List = styled(L)`
  text-align: center;
  list-style-type: none;
`;

/** ************************************************************************* */

const ListItem = styled(Li)`
  color: ${colors.black};
  font-family: 'Fira Code', monospace;
  font-size: 2em;
  margin: 0.5em 0;
`;

/** ************************************************************************* */

export default class ContextWhoUsesIt extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Notes>
          React Router v1 - February, 2016 (React v0.14)
          <ul>
            <li>was implemented with a Mixin</li>
            <li />
            <li>JSX Spec Introduced - September 03, 2014 (React v0.11.1)</li>
          </ul>
          <br />
          React Router v2 - October 07, 2015 (still v0.14, but weeks away from
          v0.15)
          <ul>
            <li>utilized the &quot;un-official&quot;</li>
          </ul>
        </Notes>
        <Heading
          caps
          fit
          margin={'0 0 1em 0'}
          size={2}
          textColor={colors.secondary}
        >
          Who uses the Context API&apos;s?
        </Heading>

        <List fill>
          <Appear order={1}>
            <ListItem>react-redux</ListItem>
          </Appear>
          <Appear order={2}>
            <ListItem>react-mobx</ListItem>
          </Appear>
          <Appear order={3}>
            <ListItem>flux</ListItem>
          </Appear>
          <Appear order={4}>
            <ListItem>react-router</ListItem>
          </Appear>
          <Appear order={5}>
            <ListItem>react-apollo</ListItem>
          </Appear>
          <Appear order={6}>
            <ListItem>react-emotion</ListItem>
          </Appear>
          <Appear order={7}>
            <ListItem>styled-components</ListItem>
          </Appear>
          <Appear order={8}>
            <ListItem>react-chartjs</ListItem>
          </Appear>

          <Appear order={9}>
            <ListItem>ant-design</ListItem>
          </Appear>
          <Appear order={10}>
            <ListItem>material-ui</ListItem>
          </Appear>
          <Appear order={11}>
            <ListItem>gatsby</ListItem>
          </Appear>
          <Appear order={12}>
            <ListItem>@blueprintjs/*</ListItem>
          </Appear>

          <Appear order={13}>
            <ListItem>spectacle</ListItem>
          </Appear>

          <Appear order={14}>
            <ListItem>...</ListItem>
          </Appear>
        </List>
      </React.Fragment>
    );
  }
}
