import { Dispatch, SetStateAction } from "react";

export interface IWrapper { children: React.ReactNode }
export interface IAddComment { onAddComment: Dispatch<SetStateAction<never[]>> }