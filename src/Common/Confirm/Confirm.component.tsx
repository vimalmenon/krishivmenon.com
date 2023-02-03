import Button from '@mui/material/Button';
import { ReactChildren } from '@types';

import { IConfirm } from './Confirm';
import { Dialog } from '../';

export const Confirm: React.FC<IConfirm & ReactChildren> = ({
  open,
  title = 'Confirm',
  children,
  handleClose,
  handleConfirm,
  fullWidth,
  maxWidth,
}) => {
  return (
    <Dialog
      open={open}
      title={title}
      handleClose={handleClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      <Dialog.Body>{children}</Dialog.Body>
      <Dialog.Footer>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleConfirm}>Confirm</Button>
      </Dialog.Footer>
    </Dialog>
  );
};
