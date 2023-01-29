import { IApi } from '@types';

export interface IUseApiProvider {
  alert: IAlert | null;
  makeApiCall: <T, K = unknown>(value: IApi<K>) => Promise<T>;
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
}

export interface IUseApiProviderExposed {
  makeApiCall: <T, K = unknown>(value: IApi<K>) => Promise<T>;
}

export type ISeverityType = 'error' | 'warning' | 'info' | 'success';

export interface IAlert {
  message: string;
  severity: ISeverityType;
}
