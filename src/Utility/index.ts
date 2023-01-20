import { AnyType, IGenericReturn } from '@types';
import { v4 as uuid } from 'uuid';

export const NotImplemented = (): AnyType => {
  throw new Error('Function not implemented');
};

export const checkTruthy = (value: string | undefined | null) => {
  if (!value) return false;
  if (value === null) return false;
  return true;
};

export const getFormData = <T>(body: T): FormData => {
  const result = new FormData();
  if (body) {
    Object.keys(body).forEach((data) => {
      result.append(data, (body as AnyType)[data]);
    });
  }
  return result;
};
export const getUid: IGenericReturn<string> = () => {
  return uuid();
};

export { apis, getBaseUrl } from './apis';
