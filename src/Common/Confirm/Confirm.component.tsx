import Button from '@mui/material/Button';

import { Dialog, Icon, PromiseLoadingButton } from '@common';
import { ReactChildren } from '@types';

import { IConfirm } from './Confirm';

export const Confirm: React.FC<IConfirm & ReactChildren> = ({
  open,
  title = 'Confirm',
  children,
  handleClose,
  handleConfirm,
  handleConfirmPromise,
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
      <Dialog.BodyText>{children}</Dialog.BodyText>
      <Dialog.Footer>
        {handleConfirm ? (
          <Button
            variant="contained"
            onClick={handleConfirm}
            endIcon={<Icon.icons.Check />}
          ></Button>
        ) : null}
        {handleConfirmPromise ? (
          <PromiseLoadingButton
            variant="contained"
            onClick={handleConfirmPromise}
            startIcon={<Icon.icons.Check />}
          >
            Confirm
          </PromiseLoadingButton>
        ) : null}
        <Button variant="outlined" onClick={handleClose} endIcon={<Icon.icons.Cancel />}>
          Cancel
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};
