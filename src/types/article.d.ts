export interface Article {
  id: number;

  imageUrl?: string;
  category: string;
  title: string;
  isActive: boolean;
  isLike: boolean;
  authorNames: string[];
  likeNum: number;
}

export interface CurationType {
  title: string;
  content: Article[];
}
