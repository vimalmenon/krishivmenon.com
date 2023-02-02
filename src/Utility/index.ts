import { AnyType, IGeneric, IGenericReturn } from '@types';
import { v4 as uuid } from 'uuid';

export const NotImplemented = (): AnyType => {
  throw new Error('Function not implemented');
};

export const checkTruthy: IGeneric<string | undefined | null, boolean> = (value) => {
  if (!value) return false;
  if (value === null) return false;
  return true;
};

export const getUid: IGenericReturn<string> = () => {
  return uuid();
};

export { apis, getBaseUrl } from './apis';
