import { Breakpoint } from '@mui/material/styles';

import { IGenericMethod, ReactChildren } from '@types';

export interface IDialog {
  open: boolean;
  handleClose?: IGenericMethod;
  title: string;
  fullWidth?: boolean;
  maxWidth?: Breakpoint;
}

export interface IDialogStatic {
  Body: React.FC<ReactChildren>;
  Footer: React.FC<ReactChildren>;
  BodyText: React.FC<ReactChildren>;
}
