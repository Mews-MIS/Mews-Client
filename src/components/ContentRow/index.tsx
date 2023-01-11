import Image from "next/image";
import Link from "next/link";
import * as s from "./styles";

export interface ContentRowProps {
  index: number;
  contentInfo: { imageUrl?: string; articleNum: string; contentName: string };
}

function ContentRow({ index, contentInfo }: ContentRowProps) {
  return (
    <Link href={`articles/${contentInfo.articleNum}`}>
      <s.Wrapper>
        <p>{index}</p>
        <s.ImageContainer>
          {contentInfo.imageUrl ? (
            <Image src={contentInfo.imageUrl} alt="콘텐츠 이미지" width={70} height={50} />
          ) : (
            <s.DefaultImage />
          )}
        </s.ImageContainer>
        <s.ContentNameLabel>{contentInfo.contentName}</s.ContentNameLabel>
      </s.Wrapper>
    </Link>
  );
}

export default ContentRow;
