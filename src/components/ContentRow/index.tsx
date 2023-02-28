import Link from "next/link";
import * as s from "./styles";
import { Article } from "../../types/article";

export interface ContentRowProps {
  index: number;
  contentInfo: Article;
}

function ContentRow({ index, contentInfo }: ContentRowProps) {
  return (
    <Link href={`article/${contentInfo.id}`}>
      <s.Wrapper>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>{index}</label>
        <s.ImageContainer>
          {contentInfo.fileUrls ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={contentInfo.fileUrls[0]} alt="콘텐츠 이미지" width={70} height={50} />
          ) : (
            <s.DefaultImage />
          )}
        </s.ImageContainer>
        <s.ContentNameLabel>{contentInfo.title}</s.ContentNameLabel>
      </s.Wrapper>
    </Link>
  );
}

export default ContentRow;
