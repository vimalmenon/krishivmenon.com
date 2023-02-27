import { IGenericReturn } from '@types';

export interface IPromiseLoadingButton {
  onClick: IGenericReturn<Promise<unknown>>;
}
