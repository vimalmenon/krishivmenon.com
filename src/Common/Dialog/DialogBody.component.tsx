import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import { ReactChildren } from '@types';

export const DialogBody: React.FC<ReactChildren> = ({ children }) => {
  return <DialogContent>{children}</DialogContent>;
};

export const DialogBodyText: React.FC<ReactChildren> = ({ children }) => {
  return (
    <DialogContent>
      <DialogContentText>{children}</DialogContentText>
    </DialogContent>
  );
};
