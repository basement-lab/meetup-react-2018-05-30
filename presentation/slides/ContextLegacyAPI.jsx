import React from 'react';
import { BlockQuote, Cite, Quote } from 'spectacle';
import styled from 'react-emotion';

/** ************************************************************************* */

const Block = styled(BlockQuote)`
  max-width: 1000px;
  width: 50%;
`;

/** ************************************************************************* */

export default class ContextLegacyAPI extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Block>
          <Quote>
            The legacy context API will be removed in a future major version.
            Use the new context API introduced with version 16.3. The legacy API
            will continue working for all 16.x releases.
          </Quote>
          <Cite margin={'1.5em auto'}>ReactJS.org - Legacy Context docs</Cite>
        </Block>
      </React.Fragment>
    );
  }
}
