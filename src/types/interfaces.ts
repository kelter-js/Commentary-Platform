export interface IComment {
  email: string;
  author: string;
  comment: string;
  avatar: string;
  raiting: number;
  date: Date;
  id: string,
}

export interface IWrapper {
  tag: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

export interface IAddComment { onAddComment: (value: IComment) => void }
export interface ICommentProps { data: IComment }
export interface IComments { comments: IComment[] | [] }