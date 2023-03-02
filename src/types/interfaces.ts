import { Dispatch, SetStateAction } from "react";

export interface IComment {
  email: string;
  author: string;
  comment: string;
  avatar: string;
  raiting: number;
  date: number;
  id: number,
}

export interface IWrapper { children: React.ReactNode }
export interface IAddComment { onAddComment: Dispatch<SetStateAction<never[]>> }
export interface ICommentProps { data: IComment }
export interface IComments { comments: IComment[] }