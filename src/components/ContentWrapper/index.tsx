import React from "react";
import Link from "next/link";
import * as s from "./styles";

export interface ContentWrapperProps {
  contentName: string;
  children: React.ReactNode;
  viewMoreLink?: string;
}

const ContentWrapper = ({ contentName, children, viewMoreLink }: ContentWrapperProps) => {
  return (
    <s.Wrapper>
      <s.TopArea>
        <s.WrapperName>{contentName}</s.WrapperName>
        {viewMoreLink && (
          <div>
            <Link href={viewMoreLink}>더보기</Link>
          </div>
        )}
      </s.TopArea>
      {children}
    </s.Wrapper>
  );
};

export default ContentWrapper;
