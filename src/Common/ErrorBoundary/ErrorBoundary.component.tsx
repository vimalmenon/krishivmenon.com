import React, { ReactNode } from 'react';

import { ReactChildren } from '@types';

import { IErrorBoundaryProps, IErrorBoundaryChildren } from './ErrorBoundary';
import { ErrorBoundaryBody } from './ErrorBoundary.style';

export class ErrorBoundary extends React.Component<
  ReactChildren & IErrorBoundaryChildren,
  IErrorBoundaryProps
> {
  constructor(props: ReactChildren & IErrorBoundaryChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): IErrorBoundaryProps {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
  //   // You can also log the error to an error reporting service
  //   logErrorToMyService(error, errorInfo);
  // }

  render(): ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ErrorBoundaryBody sx={this.props.sx}>
          <h1>Something went wrong.</h1>
        </ErrorBoundaryBody>
      );
    }

    return this.props.children;
  }
}
