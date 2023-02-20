import { AnyType, IGeneric } from '@types';

export const NotImplemented = (): AnyType => {
  throw new Error('Function not implemented');
};

export const checkTruthy: IGeneric<string | undefined | null, boolean> = (value) => {
  if (!value) return false;
  if (value === null) return false;
  return true;
};

export { apis, getBaseUrl } from './apis';
