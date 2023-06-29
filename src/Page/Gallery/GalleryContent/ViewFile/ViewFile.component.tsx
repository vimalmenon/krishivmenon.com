import React from 'react';

import Button from '@mui/material/Button';

import { Icon, Dialog } from '@common';

import { useFileHelper } from '../../Gallery.service';

export const ViewFile: React.FC = () => {
  const { fileAction, onViewFileCancel } = useFileHelper();
  return (
    <Dialog open={fileAction === 'VIEW_FILE'} title={'View files'}>
      <Dialog.Body>test</Dialog.Body>
      <Dialog.Footer>
        <Button variant="outlined" startIcon={<Icon.icons.Cancel />} onClick={onViewFileCancel}>
          Cancel
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};
