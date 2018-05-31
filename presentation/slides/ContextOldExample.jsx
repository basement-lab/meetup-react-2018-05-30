import React from 'react';
import { CodePane } from 'spectacle';
import styled from 'react-emotion';

// import { colors } from '../theme';

/** ************************************************************************* */

const Code = styled(CodePane)`
  max-width: 1000px;
  width: 50%;
  font-size: 1.5em;
  margin-left: 25%;
`;

/** ************************************************************************* */

const CODE = `
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    return (
      <button style={{background: this.context.color}}>
        {this.props.children}
      </button>
    );
  }
}

Button.contextTypes = {
  color: PropTypes.string
};

class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.text} <Button>Delete</Button>
      </div>
    );
  }
}

class MessageList extends React.Component {
  getChildContext() {
    return {color: "purple"};
  }

  render() {
    const children = this.props.messages.map((message) =>
      <Message text={message.text} />
    );
    return <div>{children}</div>;
  }
}

MessageList.childContextTypes = {
  color: PropTypes.string
};
`;

/** ************************************************************************* */

export default class ContextOldExample extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Code lang="jsx" source={CODE} margin="20px auto" overflow="overflow" />
      </React.Fragment>
    );
  }
}
