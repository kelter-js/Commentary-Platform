import { Dispatch, SetStateAction } from "react";

export interface IWrapper { children: React.ReactNode }
export interface IAddComment { onAddComment: Dispatch<SetStateAction<never[]>> }
export interface ICommentData {
  email: string;
  author: string;
  comment: string;
  avatar: { "0": any }
}
export interface IComments {
  comments: ICommentData[],
}