import DialogActions from '@mui/material/DialogActions';

import { ReactChildren } from '@types';

export const DialogFooter: React.FC<ReactChildren> = ({ children }) => {
  return <DialogActions>{children}</DialogActions>;
};
