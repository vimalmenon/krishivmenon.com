import { IApi } from '@types';

export interface IUseApiProvider {
  makeApiCall: <T, K = unknown>(value: IApi<K>) => Promise<T>;
}
