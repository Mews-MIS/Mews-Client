export interface Article {
  id: number;
  fileUrls: string[];
  type: string;
  title: string;
  isActive: boolean;
  isLike: boolean;
  authorNames: string[];
  like_count: number;
}

export interface CurationType {
  title: string;
  content: Article[];
}

export interface NewsListIcon {
  id: number;
  title: string;
  authorNames: string[];
  views: number;
  likeNum: number;
  bookmarkNum: number;
  thumbnailURL: string;
  commentNum: number;
}
