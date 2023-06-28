import { IGenericMethod, IGenericReturn } from '@types';

export interface IConfirm {
  open: boolean;
  handleClose?: IGenericMethod;
  handleConfirm?: IGenericMethod;
  handleConfirmPromise?: IGenericReturn<Promise<unknown>>;
  title?: string;
  fullWidth?: boolean;
  maxWidth?: Breakpoint;
}
