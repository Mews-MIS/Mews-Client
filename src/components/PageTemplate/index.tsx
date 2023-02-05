import React from "react";
import Wrapper from "./styles";

const PageTemplate = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageTemplate;
