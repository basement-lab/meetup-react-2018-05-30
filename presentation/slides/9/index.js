import React from 'react';
import {
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

/** ************************************************************************* */

const Container = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  font-size: 1.2em;
  margin-top: 2.5%;

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
  <SlideSet data-id="react-lifecycle-changes" id={9} goTo={10}>
    <Slide
      data-id="old-react-lifecycle"
      transition={['spin', 'zoom']}
      bgColor={black}
      controlColor={tertiary}
      progressColor={gray}
    >
      <Image src={images.reactLifecycleOld.replace('/', '')} />

      <Link
        href="https://twitter.com/dan_abramov/status/981712092611989509"
        target="_blank"
      >
        <Text margin="2em 0 0 0" size={4} textColor={gray} textFont="Fira Code">
          @sstur_
        </Text>
      </Link>
    </Slide>

    <Slide
      data-id="lifecycle-changes"
      transition={['slide']}
      bgColor={grayDark}
      controlColor={secondary}
      progressColor={gray}
    >
      <Container>
        <div>
          <Heading
            fill
            margin="0 0 1em 0"
            size={4}
            textColor={tertiary}
            lineHeight="1.2em"
          >
            Side-by-Side
            <br />
            of
            <br />
            Lifecycle API&apos;s
          </Heading>
          <Layout>
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
                    <Text
                      textColor={gray}
                      textFont="Fira Code"
                      textSize="0.8em"
                    >
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
                    <Text
                      textColor={gray}
                      textFont="Fira Code"
                      textSize="0.8em"
                    >
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
          </Layout>
        </div>
      </Container>
    </Slide>
    <Slide
      data-id="new-react-lifecycle"
      transition={['spin', 'zoom']}
      bgColor={black}
      controlColor={tertiary}
      progressColor={gray}
    >
      <Image src={images.reactLifecycleNew.replace('/', '')} />

      <Link
        href="https://twitter.com/dan_abramov/status/981712092611989509"
        target="_blank"
      >
        <Text margin="2em 0 0 0" size={4} textColor={gray} textFont="Fira Code">
          @dan_abramov
        </Text>
      </Link>
    </Slide>
  </SlideSet>
);
