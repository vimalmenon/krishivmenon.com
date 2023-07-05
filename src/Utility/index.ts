import { ENV } from '@constant';
import { AnyType, IGeneric } from '@types';

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

export const getS3BucketFullPath: IGeneric<string, string> = (path) => {
  return `${ENV.ASSET_S3_BUCKET}/${path}`;
};

export const convertMinutesToMilliseconds = (minutes: number): number => {
  return minutes * 60 * 1000;
};
