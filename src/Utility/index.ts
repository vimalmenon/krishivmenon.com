import { AnyType } from '@types';

export const NotImplemented = (): AnyType => {
  throw new Error('Function not implemented');
};

export const checkTruthy = (value: string | undefined | null) => {
  if (!value) return false;
  if (value === null) return false;
  return true;
};
