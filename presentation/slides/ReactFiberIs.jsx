import React from 'react';
import { Heading, Notes } from 'spectacle';

import { white } from '../theme';

/** ************************************************************************* */

export default class ReactFiberIs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Notes>
          Not that the previous reconciliation algorithm wasn&apos;t, but just
          sayn&apos;
        </Notes>
        <Heading margin="1em 0 0 0" size={1} textColor={white}>
          a
        </Heading>

        <Heading fit italic size={1} textColor={white}>
          hella&apos; gnarly
        </Heading>

        <Heading fill margin="2em 0 0 0" size={1} textColor={white}>
          reconciliation algorithm
        </Heading>
      </React.Fragment>
    );
  }
}
