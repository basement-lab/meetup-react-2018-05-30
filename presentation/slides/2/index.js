import React from 'react';
import { CodePane, Slide } from 'spectacle';

/** ************************************************************************* */

export default (
  <Slide
    transitionIn={['zoom', 'fade']}
    transitionOut={['slide', 'fade']}
    bgColor="primary"
    notes="<ul><li>talk about that</li><li>and that</li></ul>"
  >
    <CodePane
      lang="jsx"
      source={require('raw-loader!../../assets/deck.example')}
      margin="20px auto"
      overflow="overflow"
    />
  </Slide>
);
