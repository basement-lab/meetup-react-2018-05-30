import React from 'react';
import {
  Fill,
  Heading,
  Layout,
  TableBody,
  TableHeader,
  TableHeaderItem as ThTd,
  TableItem,
  TableRow as TR,
  Table as T,
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

const symbolSize = '0.9em';

/** ************************************************************************* */

const Table = styled(T)`
  padding: 1em 0 2em 0;

  thead td {
    font-size: 2.5em;
  }

  tbody td {
    border-top: 1px solid ${gray};
    padding: 0.6em 2em;
  }

  tbody td:nth-of-type(2) {
    border-left: 1px solid ${gray};
    border-right: 1px solid ${gray};
  }
`;

/** ************************************************************************* */

const TableRow = styled(TR)`
  td:nth-of-type(1) {
    width: 50%;
    text-align: right;
    padding-right: 1em;
  }
  td:nth-of-type(3) {
    width: 50%;
    text-align: left;
    padding-left: 1em;
  }

  td {
    padding: 0.5em 2em;
  }
`;

/** ************************************************************************* */

const TableHeaderItem = styled(ThTd)`
  padding-left: 0 !important;
  padding-right: 0 !important;
`;

/** ************************************************************************* */

const Small = styled('small')`
  font-family: 'Fira Code', monospace;
  text-transform: lowercase;
  vertical-align: center;
`;

/** ************************************************************************* */

export default class ReactLifecyclesCompare extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Fill>
            <Heading
              margin="0 0 1em 0"
              size={3}
              textColor={tertiary}
              lineHeight="1.2em"
            >
              Lifecycle API Side-by-Side
            </Heading>
          </Fill>
        </Layout>
        <Layout>
          <Fill>
            <Table bgColor={white}>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem>
                    <Text caps>
                      old lifecycle&nbsp;&nbsp;<Small>&lt;v16.3</Small>
                    </Text>
                  </TableHeaderItem>

                  <TableHeaderItem />

                  <TableHeaderItem>
                    <Text caps>
                      <Small>&gt;=v16.3</Small>&nbsp;&nbsp;new lifecycle
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
                      React.createClass
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
                      React.createClass
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
                    <Text
                      bold
                      textColor={orange}
                      textFont="Fira Code"
                      textSize={symbolSize}
                    >
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
                    <Text
                      bold
                      textColor={red}
                      textFont="Fira Code"
                      textSize={symbolSize}
                    >
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
                    <Text
                      bold
                      textColor={green}
                      textFont="Fira Code"
                      textSize={symbolSize}
                    >
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
                    <Text
                      bold
                      textColor={green}
                      textFont="Fira Code"
                      textSize={symbolSize}
                    >
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
                    <Text
                      textColor={red}
                      textFont="Fira Code"
                      textSize={symbolSize}
                    >
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
                    <Text
                      bold
                      textColor={orange}
                      textFont="Fira Code"
                      textSize={symbolSize}
                    >
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
                    <Text
                      textColor={red}
                      textFont="Fira Code"
                      textSize={symbolSize}
                    >
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
                    <Text
                      bold
                      textColor={green}
                      textFont="Fira Code"
                      textSize={symbolSize}
                    >
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
                    <Text
                      bold
                      textColor={orange}
                      textFont="Fira Code"
                      textSize={symbolSize}
                    >
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
                    <Text
                      bold
                      textColor={green}
                      textFont="Fira Code"
                      textSize={symbolSize}
                    >
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
                    <Text
                      bold
                      textColor={red}
                      textFont="Fira Code"
                      textSize={symbolSize}
                    >
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
