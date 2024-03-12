export interface IPost {
  id: number;
  body: string;
  title: string;
  userId: number;
}

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
