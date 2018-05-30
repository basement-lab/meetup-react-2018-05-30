/* eslint-disable */
import React from 'react';
import {
  Appear,
  Fit,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Notes,
  S,
  Text,
} from 'spectacle';
import styled from 'react-emotion';

import { colors } from '../theme';

import SAVI_APP_SCREENSHOT from '../assets/savi-demo.png';

/** ************************************************************************* */

const textSize = '3em';

/** ************************************************************************* */

const Img = styled(Image)`
  padding: 3em;
  background-color: ${colors.secondary};
`;

/** ************************************************************************* */

export default class SaviSolutions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Notes>
          a local company
          <br />
          <h2>who&apos;s office is just NORTH of Salt Lake City</h2>
          <br />
          Existing business model, pivot to Saas to fill an existing need.
          <br />
          Contracts signed with an InVision project...
          <br />
          <h1>&quot;Let's talk React&quot;</h1>
        </Notes>
        <Layout>
          <Fill>
            <Image src="http://getsavi.com/wp-content/uploads/2018/01/Savi-Logo-retina.png" />
          </Fill>
        </Layout>

        <Layout>
          <Fill>
            <Link href="http://getsavi.com/about/engineer/" target="_blank">
              <Text
                fill
                margin="1em 0 3em 0"
                textColor={colors.grayDark}
                textFont="Fira Code"
                textSize="2em"
              >
                getSavi.com
              </Text>
            </Link>
          </Fill>
        </Layout>

        <Layout>
          <Fill>
            <Appear order={0}>
              <Img src={SAVI_APP_SCREENSHOT} width="90%" />
            </Appear>
          </Fill>
          <Fill>
            <List>
              <Appear order={1}>
                <ListItem textColor={colors.black} textSize={textSize}>
                  React & Typescript - frontend
                </ListItem>
              </Appear>

              <Appear order={2}>
                <ListItem textColor={colors.black} textSize={textSize}>
                  GraphQL - client API
                </ListItem>
              </Appear>

              <Appear order={3}>
                <ListItem textColor={colors.black} textSize={textSize}>
                  Elixir - microservices backend
                </ListItem>
              </Appear>

              <Appear order={4}>
                <ListItem textColor={colors.black} textSize={textSize}>
                  Protobuf &amp; gRPC - service-to-service network
                </ListItem>
              </Appear>

              <Appear order={4}>
                <ListItem textColor={colors.black} textSize={textSize}>
                  PostgreSQL &amp;&nbsp;
                  <S type="italic">
                    <small>undetermined</small>
                  </S>
                </ListItem>
              </Appear>

              <Appear order={6}>
                <ListItem
                  caps
                  margin="2em 0 0 0"
                  textColor={colors.black}
                  textSize={textSize}
                >
                  We're Hiring!
                </ListItem>
              </Appear>
            </List>
          </Fill>
        </Layout>
      </React.Fragment>
    );
  }
}
