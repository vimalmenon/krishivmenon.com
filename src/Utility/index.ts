import { AnyType } from '@types';

export const NotImplemented = (): AnyType => {
  throw new Error('Function not implmented');
};
