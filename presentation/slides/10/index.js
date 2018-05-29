import React from 'react';
import { Heading, Markdown, Slide } from 'spectacle';

import images from '../images';
// import theme from '../theme';

/** ************************************************************************* */

export default (
  <Slide
    transition={['slide']}
    bgColor="tertiary"
    controlColor="primary"
    progressColor="primary"
  >
    <Heading caps fit size={1} textColor="primary">
      Inline Markdown
    </Heading>
    <Markdown>
      {`
  ![Markdown Logo](${images.markdown.replace('/', '')})

  You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
  * Lists too!
  * With ~~strikethrough~~ and _italic_
  * And let's not forget **bold**
  * Add some \`inline code\` to your sldes!
            `}
    </Markdown>
  </Slide>
);
