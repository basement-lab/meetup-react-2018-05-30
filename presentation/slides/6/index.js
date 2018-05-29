import React from 'react';
import {
  Heading,
  // Image,
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

// import images from '../images';
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

/** ************************************************************************* */

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
        <List textSize="2em">
          <Link
            href="https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html"
            target="_blank"
          >
            <ListItem margin="0.5em" textColor={white} textSize="1em">
              [ReactJS Blog] Update on Async Rendering - March 27, 2018 by Brian
              Vaughn
            </ListItem>
          </Link>

          <Link
            href="https://reactjs.org/blog/2017/09/26/react-v16.0.html"
            target="_blank"
          >
            <ListItem margin="0.5em" textColor={white} textSize="1em">
              [ReactJS Blog] React v16.0 - September 26, 2017 by Andrew Clark
            </ListItem>
          </Link>

          <Link
            href="https://www.youtube.com/watch?v=nLF0n9SACd4"
            target="_blank"
          >
            <ListItem margin="0.5em" textColor={white} textSize="1em">
              [YouTube] Sneak Peek: Beyond React 16 - March 2017 by Dan Abramov,
              React Conf 2017
              <Text margin="0 3em" textColor={white} textSize="0.5em">
                ⭐️️️️️ ⭐️ ⭐
              </Text>
            </ListItem>
          </Link>

          <Link
            href="https://www.youtube.com/watch?v=ZCuYPiUIONs"
            target="_blank"
          >
            <ListItem margin="0.5em" textColor={white} textSize="1em">
              [YouTube] A Cartoon Intro to Fiber - March 2017 by Lin Clark,
              React Conf 2017
              <Text margin="0 3em" textColor={white} textSize="0.5em">
                ⭐️️️️️ ⭐️ ⭐
              </Text>
            </ListItem>
          </Link>

          <Link
            href="https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/"
            target="_blank"
          >
            <ListItem margin="0.5em" textColor={white} textSize="1em">
              bogdan-lyashenko.github.io/Under-the-hood-ReactJS
              <Text margin="0 3em" textColor={white} textSize="0.5em">
                ⭐️️️️️ ⭐️ ⭐
              </Text>
            </ListItem>
          </Link>

          <Link
            href="https://www.slideshare.net/sabativi/react-fiber"
            target="_blank"
          >
            <ListItem margin="0.5em" textColor={white} textSize="1em">
              [Slideshare] sabativi - react-fiber
            </ListItem>
          </Link>

          <Link
            href="https://github.com/acdlite/react-fiber-architecture"
            target="_blank"
          >
            <ListItem margin="0.5em" textColor={white} textSize="1em">
              github.com/acdlite/react-fiber-architecture
            </ListItem>
          </Link>
        </List>
      </div>
    </Container>
  </Slide>
);
