import ContentWrapper from "@components/ContentWrapper";

export default {
  title: "component/contentWrapper",
  component: ContentWrapper,
};

export const contentWrapper = () => (
  <>
    <ContentWrapper contentName="테스트">{/* <ContentCard /> */}</ContentWrapper>

    <ContentWrapper contentName="테스트" viewMoreLink="https://www.naver.com">
      {/* <ContentCard /> */}
    </ContentWrapper>
  </>
);
