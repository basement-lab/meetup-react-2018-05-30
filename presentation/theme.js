import createTheme from 'spectacle/lib/themes/default';

/** ************************************************************************* */

export const primary = '#fff' /* white */;
export const secondary = '#36a9e0' /* Savi blue*/;
export const tertiary = '#61dafb' /* React blue */;
// export const black = '#000';
export const black = '#262626' /* gray-darkest */;
export const gray = '#d5d2d3' /* dark-gray */;
export const grayDark = '#5e5c5c' /* darker-gray */;
export const green = '#90ee90' /* lightgreen */;
export const orange = '#ffa500' /* orange */;
export const purple = '#800080' /* purple */;
export const red = '#dc143c' /* crimson */;
export const title = '#2b2b2b';
// export const title = 'rgb(0, 0, 0, 0.9)';
export const yellow = '#ff0' /* yellow */;
export const white = '#fff';

/** ************************************************************************* */

export const colors = {
  primary,
  secondary,
  tertiary,
  black,
  gray,
  grayDark,
  green,
  white,
  title,
  yellow,
};

/** ************************************************************************* */

export const transitions = {
  rotate: (startBackgroundColor, endBackgroundColor) => (
    transitioning,
    forward,
  ) => {
    const angle = forward ? -180 : 180;

    return {
      transform: `
        translate3d(0%, ${transitioning ? 100 : 0}%, 0)
        rotate(${transitioning ? angle : 0}deg)
      `,
      backgroundColor: transitioning
        ? startBackgroundColor || white
        : endBackgroundColor || tertiary,
    };
  },
};

/** ************************************************************************* */

export default createTheme(colors);
