import Image from "next/image";
import * as s from "./styles";

const ProfileImageContainer = ({ imageUrl }: { imageUrl?: string }) => {
  return (
    <>
      <div>
        <s.Wrapper>
          {imageUrl ? <Image src={imageUrl} alt="프로필 사진" layout="fill" /> : <s.defaultImage />}
        </s.Wrapper>
      </div>

      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx>
        {`
          div {
            width: 200px;
            height: 200px;
          }
        `}
      </style>
    </>
  );
};

export default ProfileImageContainer;
