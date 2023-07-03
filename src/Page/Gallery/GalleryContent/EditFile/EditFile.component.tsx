import React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { Icon, PromiseLoadingButton, Dialog } from '@common';
import { Container } from '@style';
import { IGenericMethod, IGenericParam } from '@types';

import { useFileHelper, useFolderHelper } from '../../Gallery.service';

export const EditFile: React.FC = () => {
  const { onFolderAddEditSave } = useFolderHelper();
  const { fileAction, file, onFileEditCancel } = useFileHelper();
  const [label, setLabel] = React.useState<string>('');
  const [context, setContext] = React.useState<string>('');
  const updateInput: IGenericParam<React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>> = (
    e
  ) => {
    setLabel(e.target.value);
  };
  const onCancel: IGenericMethod = () => {
    onFileEditCancel();
    setLabel('');
    setContext('');
  };
  React.useEffect(() => {
    if (file) {
      setLabel(file.label);
      setContext(file.metadata?.context || '');
    }
  }, [file]);
  if (file) {
    return (
      <Dialog open={fileAction === 'EDIT_FILE'} title={'Edit File'}>
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
          <PromiseLoadingButton
            variant="contained"
            onClick={() =>
              onFolderAddEditSave({
                label,
                context,
              })
            }
            startIcon={<Icon.icons.Save />}
          >
            <span>Update</span>
          </PromiseLoadingButton>
          <Button variant="outlined" onClick={onCancel} startIcon={<Icon.icons.Cancel />}>
            Cancel
          </Button>
        </Dialog.Footer>
      </Dialog>
    );
  }
  return null;
};
