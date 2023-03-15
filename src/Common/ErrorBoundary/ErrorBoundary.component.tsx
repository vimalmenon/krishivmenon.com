import React, { ReactNode } from 'react';

import { ReactChildren } from '@types';
import { BoundaryError } from '@utility';

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

  componentDidCatch(value: BoundaryError): void {
    if (value.showError) {
      this.setState({
        error: value.message,
      });
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ErrorBoundaryBody sx={this.props.sx}>
          <h1>{this.state.error ? this.state.error : 'Something went wrong.'} </h1>
        </ErrorBoundaryBody>
      );
    }

    return this.props.children;
  }
}
