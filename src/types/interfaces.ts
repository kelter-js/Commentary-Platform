export interface IComment {
  email: string;
  author: string;
  comment: string;
  avatar: string;
  raiting: number;
  date: Date;
  id: string,
}
export interface IReactChildrenProps { children: React.ReactNode }
export interface IWrapper extends IReactChildrenProps {
  tag: keyof JSX.IntrinsicElements;
}

export interface ITextToggler {
  toggle: () => void;
  shouldShow: boolean;
  fullyHidden?: boolean;
}

export interface IAddComment { onAddComment: (value: IComment) => void }
export interface ICommentProps { data: IComment }
export interface IComments { comments: IComment[] | [] }
export interface IErrorBoundaryState { hasError: boolean }