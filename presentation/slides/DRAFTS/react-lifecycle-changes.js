import React from 'react';
import {
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text,
  Typeface,
} from 'spectacle';
import styled from 'react-emotion';

import images from '../images';
import {
  primary,
  secondary,
  tertiary,
  black,
  gray,
  grayDark,
  green,
  orange,
  purple,
  red,
  yellow,
  white,
} from '../theme';

import NEW_LIFECYCLE from '../assets/react-lifecycle-new.jpg';
import OLD_LIFECYCLE from '../assets/react-lifecycle-old.jpg';

/** ************************************************************************* */

const Container = styled(Layout)`
  thead td {
    font-size: 2.5em;
  }

  td {
    border: 1px solid ${gray};
    padding: 0.5em 2em;
  }
`;

/** ************************************************************************* */

const Small = styled('small')`
  text-transform: lowercase;
`;

/** ************************************************************************* */

export default (
  <SlideSet data-id="react-lifecycle-changes" bgColor={black}>
    <Slide
      data-id="old-react-lifecycle"
      transition={['spin', 'zoom']}
      bgColor={black}
      controlColor={tertiary}
      progressColor={gray}
    >
      <Layout>
        <Fill>
          {/* <Image src={OLD_LIFECYCLE} display="inline-block" width="75%" /> */}

          {/* <Image src={OLD_LIFECYCLE} display="block" width="75%" /> */}

          {/* <Image src={OLD_LIFECYCLE} display="inline-block" /> */}
          <Image src={OLD_LIFECYCLE} />
        </Fill>
      </Layout>

      <Layout>
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
      </Layout>
    </Slide>

    <Slide
      data-id="new-react-lifecycle"
      transition={['spin', 'zoom']}
      bgColor={tertiary}
      controlColor={gray}
      progressColor={gray}
    >
      <Layout>
        <Fill>
          <Heading
            fill
            margin="0 0 1em 0"
            size={2}
            textColor={white}
            textFont="Fira Code"
          >
            &gt;=16.3
          </Heading>
        </Fill>
      </Layout>

      <Layout>
        <Fill>
          <Image fill src={NEW_LIFECYCLE} display="flex" width="85%" />
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
    </Slide>

    <Slide
      data-id="lifecycle-changes"
      transition={['slide']}
      bgColor={grayDark}
      controlColor={gray}
      progressColor={gray}
    >
      <Container>
        <Fill>
          <Heading
            margin="0 0 1em 0"
            size={4}
            textColor={tertiary}
            lineHeight="1.2em"
          >
            Lifecycle API Side-by-Side
          </Heading>
        </Fill>
      </Container>
      <Layout>
        <Fill>
          <Table bgColor={white}>
            <TableHeader>
              <TableRow>
                <TableHeaderItem>
                  <Text caps>
                    old lifecycle <Small>(&lt; v16.3)</Small>
                  </Text>
                </TableHeaderItem>

                <TableHeaderItem />

                <TableHeaderItem>
                  <Text caps>new lifecycle</Text>
                </TableHeaderItem>
              </TableRow>
            </TableHeader>

            <TableBody textColor={black} bgColor={white}>
              <TableRow>
                <TableItem>
                  <Text textFont="Fira Code" textSize="0.8em">
                    getDefaultProps(props, context)
                  </Text>
                </TableItem>

                <TableItem>
                  <Text textColor={gray} textFont="Fira Code" textSize="0.8em">
                    React.createElement
                  </Text>
                </TableItem>

                <TableItem />
              </TableRow>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

              <TableRow>
                <TableItem>
                  <Text textFont="Fira Code" textSize="0.8em">
                    getInitialState(props, context)
                  </Text>
                </TableItem>

                <TableItem>
                  <Text textColor={gray} textFont="Fira Code" textSize="0.8em">
                    React.createElement
                  </Text>
                </TableItem>

                <TableItem />
              </TableRow>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

              <TableRow>
                <TableItem>
                  <Text textFont="Fira Code" textSize="0.8em">
                    <span style={{ color: purple }}>constructor</span>(props,
                    context)
                  </Text>
                </TableItem>

                <TableItem>
                  <Text bold textColor={orange} textFont="Fira Code">
                    !=
                  </Text>
                </TableItem>

                <TableItem>
                  <Text textFont="Fira Code" textSize="0.8em">
                    <span style={{ color: purple }}>constructor</span>(props)
                  </Text>
                </TableItem>
              </TableRow>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

              <TableRow>
                <TableItem>
                  <Text textFont="Fira Code" textSize="0.8em">
                    componentWillMount()
                  </Text>
                </TableItem>

                <TableItem>
                  <Text bold textColor={red} textFont="Fira Code">
                    ✗
                  </Text>
                </TableItem>

                <TableItem />
              </TableRow>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

              <TableRow>
                <TableItem>
                  <Text textFont="Fira Code" textSize="0.8em">
                    render()
                  </Text>
                </TableItem>
                <TableItem>
                  <Text bold textColor={green} textFont="Fira Code">
                    ✅
                  </Text>
                </TableItem>

                <TableItem>
                  <Text textFont="Fira Code" textSize="0.8em">
                    render()
                  </Text>
                </TableItem>
              </TableRow>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

              <TableRow>
                <TableItem>
                  <Text textFont="Fira Code" textSize="0.8em">
                    componentDidMount()
                  </Text>
                </TableItem>
                <TableItem>
                  <Text bold textColor={green} textFont="Fira Code">
                    ✅
                  </Text>
                </TableItem>

                <TableItem>
                  <Text textFont="Fira Code" textSize="0.8em">
                    componentDidMount()
                  </Text>
                </TableItem>
              </TableRow>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

              <TableRow>
                <TableItem>
                  <Text textFont="Fira Code" textSize="0.8em">
                    componentWillReceiveProps(nextProps, nextContext)
                  </Text>
                </TableItem>

                <TableItem>
                  <Text textColor={red} textFont="Fira Code">
                    !==
                  </Text>
                </TableItem>

                <TableItem>
                  <Text textFont="Fira Code" textSize="0.8em">
                    <span style={{ color: purple }}>static</span>&nbsp;
                    getDerivedStateFromProps(props, state)
                  </Text>
                </TableItem>
              </TableRow>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

              <TableRow>
                <TableItem>
                  <Text textFont="Fira Code" textSize="0.8em">
                    shouldComponentUpdate(nextProps, nextState, nextContext)
                  </Text>
                </TableItem>

                <TableItem>
                  <Text bold textColor={orange} textFont="Fira Code">
                    !=
                  </Text>
                </TableItem>

                <TableItem>
                  <Text textFont="Fira Code" textSize="0.8em">
                    shouldComponentUpdate(props, state)
                  </Text>
                </TableItem>
              </TableRow>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

              <TableRow>
                <TableItem>
                  <Text textFont="Fira Code" textSize="0.8em">
                    componentWillUpdate(nextProps, nextState, nextContext)
                    =&gt;&nbsp;
                    <span style={{ color: purple }}>snapshot</span>
                  </Text>
                </TableItem>

                <TableItem>
                  <Text textColor={red} textFont="Fira Code">
                    !==
                  </Text>
                </TableItem>

                <TableItem>
                  <Text textFont="Fira Code" textSize="0.8em">
                    getSnapshotBeforeUpdate(prevProps, prevState)
                  </Text>
                </TableItem>
              </TableRow>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

              <TableRow>
                <TableItem>
                  <Text textFont="Fira Code" textSize="0.8em">
                    render()
                  </Text>
                </TableItem>
                <TableItem>
                  <Text bold textColor={green} textFont="Fira Code">
                    ✅
                  </Text>
                </TableItem>

                <TableItem>
                  <Text textFont="Fira Code" textSize="0.8em">
                    render()
                  </Text>
                </TableItem>
              </TableRow>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

              <TableRow>
                <TableItem>
                  <Text textFont="Fira Code" textSize="0.8em">
                    componentDidUpdate(prevProps, prevState,&nbsp;
                    <span style={{ color: purple }}>snapshot</span>)
                  </Text>
                </TableItem>

                <TableItem>
                  <Text bold textColor={orange} textFont="Fira Code">
                    !=
                  </Text>
                </TableItem>

                <TableItem>
                  <Text textFont="Fira Code" textSize="0.8em">
                    componentDidUpdate(props, state)
                  </Text>
                </TableItem>
              </TableRow>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

              <TableRow>
                <TableItem>
                  <Text textFont="Fira Code" textSize="0.8em">
                    componentWillUnmount()
                  </Text>
                </TableItem>

                <TableItem>
                  <Text bold textColor={green} textFont="Fira Code">
                    ✅
                  </Text>
                </TableItem>

                <TableItem>
                  <Text textFont="Fira Code" textSize="0.8em">
                    componentWillUnmount()
                  </Text>
                </TableItem>
              </TableRow>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

              <TableRow>
                <TableItem>
                  <Text textFont="Fira Code" textSize="0.8em">
                    componentDidUnmount(nextProps, nextState) =&gt;&nbsp;
                    <span style={{ color: purple }}>snapshot</span>
                  </Text>
                </TableItem>

                <TableItem>
                  <Text bold textColor={red} textFont="Fira Code">
                    ✗
                  </Text>
                </TableItem>

                <TableItem />
              </TableRow>
            </TableBody>
          </Table>
        </Fill>
      </Layout>
    </Slide>
  </SlideSet>
);
