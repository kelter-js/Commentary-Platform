import React from 'react';
import Fallback from './Fallback';

interface IErrorBoundaryProps { children: React.ReactNode }
interface IErrorBoundaryState { hasError: boolean }

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
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
