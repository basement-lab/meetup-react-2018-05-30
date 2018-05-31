/** ************************************************************************* */

declare const __DEBUG__: boolean;
declare const __DEV__: boolean;

/** ************************************************************************* */

declare module '*.png' {
  const dot$png: any;
  export default dot$png;
}

/** ************************************************************************* */

declare module '*.graphql' {
  import { DocumentNode } from 'graphql';

  const dot$gql: DocumentNode;

  export default dot$gql;
}

/** ************************************************************************* */
