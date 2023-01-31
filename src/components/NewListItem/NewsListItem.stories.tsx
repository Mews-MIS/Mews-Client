import NewsListItem from "@components/NewListItem";

const data = {
  id: 1,
  NewsTitle: "뮤즈의 제작기 들어보실래요?",
  authorNames: ["이정우", "김현제"],
  views: 45,
  likeNum: 12,
  bookmarkNum: 5,
  thumbnailURL: "https://ifh.cc/g/b0RAyp.jpg",
  commentNum: 3,
};

export default {
  title: "component/NewsListItem",
  component: NewsListItem,
};

export const newsListItem = () => (
  <NewsListItem
    key={data.id}
    NewsTitle={data.NewsTitle}
    authorNames={data.authorNames}
    views={data.views}
    likeNum={data.likeNum}
    bookmarkNum={data.bookmarkNum}
    thumbnailURL={data.thumbnailURL}
    commentNum={data.commentNum}
  />
);
