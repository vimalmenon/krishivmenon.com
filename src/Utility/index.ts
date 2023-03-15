import { AnyType } from '@types';

export const NotImplemented = (): AnyType => {
  throw new Error('Function not implemented');
};

export class BoundaryError extends Error {
  public showError = false;
  constructor(message: string, showError = false) {
    super(message);
    this.showError = showError;
  }
}
