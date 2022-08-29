declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

// declare module '*.md' {
//   import React from 'react';
//   const react: React.VFC;
//   export { react };
// }

declare module '*.md' {
  const html: string;
  export { html };
}

declare module 'react-html-renderer';
