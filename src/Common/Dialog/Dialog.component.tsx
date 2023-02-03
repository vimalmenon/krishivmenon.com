import React from 'react';

import MuiDialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { ReactChildren } from '@types';

import { IDialog, IDialogStatic } from './Dialog';
import { DialogBody } from './DialogBody.component';
import { DialogFooter } from './DialogFooter.component';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Dialog: IDialogStatic & React.FC<IDialog & ReactChildren> = ({
  open,
  handleClose,
  title,
  children,
}) => {
  return (
    <MuiDialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      {children}
    </MuiDialog>
  );
};

Dialog.Body = DialogBody;

Dialog.Footer = DialogFooter;
