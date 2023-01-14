export interface Article {
  id: number;
  category: string;
  title: string;
  isActive: boolean;
  isLike: boolean;
  authorNames: string[];
  likeNum: number;
}
