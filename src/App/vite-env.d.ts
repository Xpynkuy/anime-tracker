/// <reference types="vite/client" />

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

