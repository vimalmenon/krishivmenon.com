import React, { ReactNode } from 'react';

import { ReactChildren } from '@types';

import { Context } from './ErrorBoundaryProvider.service';

class ErrorBoundary extends React.Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
  //   // You can also log the error to an error reporting service
  //   logErrorToMyService(error, errorInfo);
  // }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export const ErrorBoundaryProvider: React.FC<ReactChildren> = ({ children }) => {
  return (
    <Context.Provider value={{}}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </Context.Provider>
  );
};