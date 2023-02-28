import { Dialog, Icon } from '@common';
import Button from '@mui/material/Button';
import { ReactChildren } from '@types';

import { IConfirm } from './Confirm';

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
        <Button variant="outlined" onClick={handleClose} endIcon={<Icon.icons.Cancel />}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleConfirm} endIcon={<Icon.icons.Check />}>
          Confirm
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};
