import React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { Icon, PromiseLoadingButton, Dialog } from '@common';
import { Container } from '@style';
import { IGenericMethod, IGenericParam, IGenericReturn } from '@types';

import { useFolderHelper } from '../../Gallery.service';

export const AddEditFolder: React.FC = () => {
  const { onFolderAddEditCancel, onFolderAddEditSave, folder, addEditFolder } = useFolderHelper();
  const [label, setLabel] = React.useState<string>('');
  const [context, setContext] = React.useState<string>('');
  const updateInput: IGenericParam<React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>> = (
    e
  ) => {
    setLabel(e.target.value);
  };
  const onCancel: IGenericMethod = () => {
    onFolderAddEditCancel();
    setLabel('');
    setContext('');
  };
  const onSave: IGenericReturn<Promise<void>> = async () => {
    await onFolderAddEditSave({
      label,
      context,
    });
    setLabel('');
    setContext('');
  };
  React.useEffect(() => {
    if (folder) {
      setLabel(folder.label);
      setContext(folder.metadata?.context || '');
    }
  }, [folder]);
  return (
    <Dialog
      open={addEditFolder !== 'VIEW'}
      title={addEditFolder === 'ADD' ? 'Add Folder' : 'Edit Folder'}
    >
      <Dialog.Body>
        <Container component="div" sx={{ m: 2, gap: 2 }} direction="column">
          <TextField
            value={label}
            onChange={updateInput}
            label="Folder name"
            fullWidth
            size="small"
          />
          <TextField
            label="Context"
            placeholder="Context"
            multiline
            rows={3}
            value={context}
            onChange={(e) => setContext(e.target.value)}
          />
        </Container>
      </Dialog.Body>
      <Dialog.Footer>
        <PromiseLoadingButton variant="contained" onClick={onSave} startIcon={<Icon.icons.Save />}>
          <span>{folder?.id ? 'Update' : 'Create'}</span>
        </PromiseLoadingButton>
        <Button variant="outlined" onClick={onCancel} startIcon={<Icon.icons.Cancel />}>
          Cancel
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};
