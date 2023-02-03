import { IGenericMethod } from '@types';

export interface IConfirm {
  open: boolean;
  handleClose?: IGenericMethod;
  handleConfirm?: IGenericMethod;
  title?: string;
  fullWidth?: boolean;
  maxWidth?: Breakpoint;
}
