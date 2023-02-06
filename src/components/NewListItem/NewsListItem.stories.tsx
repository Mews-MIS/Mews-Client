import NewsListItem, { NewsListItemProps } from "@components/NewListItem";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from "@storybook/react";

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<NewsListItemProps> = (args: NewsListItemProps) => <NewsListItem {...args} />;

export default {
  title: "component/NewsListItem",
  component: NewsListItem,
};

export const data = Template.bind({});
data.args = {
  contentInfo: {
    id: 1,
    title: "뮤즈의 제작기 들어보실래요?",
    authorNames: ["이정우", "김현제"],
    views: 45,
    likeNum: 12,
    bookmarkNum: 5,
    thumbnailURL: "https://ifh.cc/g/b0RAyp.jpg",
    commentNum: 3,
  },
};

/*
export const newsListItem = () => (
  <NewsListItem
    key={data.id}
    title={data.title}
    authorNames={data.authorNames}
    views={data.views}
    likeNum={data.likeNum}
    bookmarkNum={data.bookmarkNum}
    thumbnailURL={data.thumbnailURL}
    commentNum={data.commentNum}
  />
);
*/
