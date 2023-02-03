import { ReactNode } from 'react';

import { IGenericMethod, ReactChildren } from '@types';

export interface IDialog {
  open: boolean;
  handleClose?: IGenericMethod;
  title: string;
}

export interface IDialogStatic {
  Body: React.FC<ReactChildren>;
  Footer: React.FC<ReactChildren>;
}
