import { NextPage } from "next";
import * as s from "./styles";

interface IProps {
  name: string;
}

const MenuItem: NextPage<IProps> = ({ name }: { name: string }) => {
  return (
    <s.Wrapper>
      <s.MenuItem>{name}</s.MenuItem>
    </s.Wrapper>
  );
};

export default MenuItem;
