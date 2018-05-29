import React from 'react';
import {
  Heading,
  Link,
  List,
  ListItem,
  Notes,
  Slide,
  SlideSet,
  Text,
  Typeface,
} from 'spectacle';
import styled from 'react-emotion';

import { secondary, tertiary, grayDark, white } from '../theme';

/** ************************************************************************* */

const Container = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  > div {
    max-width: 1200px;
  }
`;

export default (
  <Slide
    data-id="under-the-hood-react"
    id={6}
    goTo={7}
    transition={['fade']}
    bgColor={grayDark}
    controlColor={secondary}
    progressColor={white}
  >
    <Notes>additional LIGHT reading</Notes>

    <Heading size={2} textColor={tertiary}>
      More on React Fiber
    </Heading>
    <Container>
      <div>
        <List type="A" textSize="2em">
          <ListItem
            margin="0.5em"
            href="https://www.youtube.com/watch?v=ZCuYPiUIONs"
            textColor={white}
            textSize="1em"
          >
            [YouTube] Lin Clark - A Cartoon Intro to Fiber - React Conf 2017
            <Text margin="0 3em" textColor={white} textSize="0.5em">
              ⭐️️️️️ ⭐️ ⭐
            </Text>
          </ListItem>

          <ListItem
            margin="0.5em"
            href="https://www.slideshare.net/sabativi/react-fiber"
            textColor={white}
            textSize="1em"
          >
            [Slideshare] sabativi - react-fiber
          </ListItem>

          <ListItem
            margin="0.5em"
            href="https://github.com/acdlite/react-fiber-architecture"
            textColor={white}
            textSize="1em"
          >
            github.com/acdlite/react-fiber-architecture
          </ListItem>
        </List>
      </div>
    </Container>
  </Slide>
);
