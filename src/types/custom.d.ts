declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
  import React = require("react");

  export const ReactComponent: REact.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
