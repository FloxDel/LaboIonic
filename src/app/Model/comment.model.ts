export interface CommentModel {
  id: number;
  content: string;
  postDate: Date;
  userID: number;
  movieID: number;
  userName?: string;
}
