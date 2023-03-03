import React from 'react';
import Fallback from './Fallback';
import { IReactChildrenProps, IErrorBoundaryState } from '../types/interfaces';

/**
 * return React component, to catch any error in components below, in react tree
 * @return  {JSX.Element} transparent component, which show childrens, or fallback UI
*/
class ErrorBoundary extends React.Component<IReactChildrenProps, IErrorBoundaryState> {
  constructor(props: IReactChildrenProps) {
    super(props);
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    return this.state.hasError ? (<Fallback />) : this.props.children;
  }
}

export default ErrorBoundary;
