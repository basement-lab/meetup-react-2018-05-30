import React from 'react';
import {
  Fill,
  Heading,
  Layout,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text,
} from 'spectacle';
import styled from 'react-emotion';

import {
  tertiary,
  black,
  gray,
  green,
  orange,
  purple,
  red,
  white,
} from '../theme';

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
  font-family: 'Fira Code', monospace;
  text-transform: lowercase;
  vertical-align: center;
  margin-left: 0.25em;
`;

/** ************************************************************************* */

export default class ReactLifecyclesCompare extends React.Component {
  render() {
    return (
      <React.Fragment>
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
                    <Text caps margin="0.75em auto">
                      old lifecycle <Small>&lt;v16.3</Small>
                    </Text>
                  </TableHeaderItem>

                  <TableHeaderItem />

                  <TableHeaderItem>
                    <Text caps margin="auto auto 0.5em auto">
                      new lifecycle <Small>&gt;=v16.3</Small>
                    </Text>
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
          </Fill>
        </Layout>
      </React.Fragment>
    );
  }
}
