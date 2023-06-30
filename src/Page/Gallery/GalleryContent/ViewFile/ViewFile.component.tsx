import React from 'react';

import Button from '@mui/material/Button';

import { Icon, Dialog, FileViewer } from '@common';

import { useFileHelper } from '../../Gallery.service';

export const ViewFile: React.FC = () => {
  const { fileAction, onViewFileCancel, selectedFile } = useFileHelper();
  if (selectedFile) {
    return (
      <Dialog open={fileAction === 'VIEW_FILE'} title={'View file'} maxWidth="xl">
        <Dialog.Body>
          <FileViewer file={selectedFile} width={500} />
        </Dialog.Body>
        <Dialog.Footer>
          <Button variant="outlined" startIcon={<Icon.icons.Cancel />} onClick={onViewFileCancel}>
            Cancel
          </Button>
        </Dialog.Footer>
      </Dialog>
    );
  }
  return null;
};
