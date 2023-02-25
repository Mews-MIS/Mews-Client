import Link from "next/link";
import * as s from "./styles";

interface EditorProfileProps {
  id: number;
  name: string;
  imgUrl: string;
}

const EditorProfile = ({ id, name, imgUrl }: EditorProfileProps) => {
  return (
    <s.EditorProfileWrapper>
      <Link href={`/editor/${id}`}>
        <s.EditorProfileImg src={imgUrl} />
        <div>{name}</div>
      </Link>
    </s.EditorProfileWrapper>
  );
};

export default EditorProfile;
