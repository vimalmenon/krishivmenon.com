import { IApi } from '@types';

export interface IUseApiProvider {
  makeApiCall: <T, K>(value: IApi<T>) => Promise<K>;
}
