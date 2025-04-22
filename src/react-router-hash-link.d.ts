declare module 'react-router-hash-link' {
    import * as React from 'react';
    import { LinkProps } from 'react-router-dom';
  
    export const HashLink: React.FC<
      LinkProps & {
        scroll?: (el: HTMLElement) => void;
        smooth?: boolean;
      }
    >;
  }
  
  