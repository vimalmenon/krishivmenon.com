import React from 'react';

import { Icon } from '@common';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Container } from '@style';

import { PaperStyle } from './AddEditFolder.style';
import { useCommonGallery } from '../Gallery.service';

export const AddEditFolder: React.FC = () => {
  const {
    addEditFolder,
    onFolderDelete,
    onAddFolderSave,
    onSelectedFolderCancel,
    onSelectedFolderLabelUpdate,
  } = useCommonGallery();
  const [edit, setEdit] = React.useState<boolean>(false);
  return (
    <PaperStyle>
      <Container component={'div'} sx={{ justifyContent: 'space-between' }}>
        {addEditFolder?.id ? <span>Edit {addEditFolder.label}</span> : <span>Add Folder</span>}
        {addEditFolder?.id &&
          addEditFolder.files.length === 0 &&
          addEditFolder.folders.length === 0 && (
            <Icon Icon={Icon.icons.Delete} label="Delete" onClick={onFolderDelete} />
          )}
      </Container>
      <div>
        <FormControl variant="outlined" fullWidth size="small">
          <InputLabel htmlFor="folder-name">Folder name</InputLabel>
          <OutlinedInput
            id="folder-name"
            value={addEditFolder?.label}
            onChange={(e) => onSelectedFolderLabelUpdate(e.target.value)}
            disabled={!edit}
            endAdornment={
              <InputAdornment position="end">
                <Icon
                  Icon={edit ? Icon.icons.Cancel : Icon.icons.Edit}
                  edge="end"
                  onClick={() => setEdit(!edit)}
                />
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
      <Container component={'div'} sx={{ flex: '1' }}>
        &nbsp;
      </Container>
      <Container component={'div'} sx={{ justifyContent: 'space-between' }}>
        <Button variant="contained" onClick={onAddFolderSave}>
          {addEditFolder?.id ? 'Update' : 'Create'}
        </Button>
        <Button variant="contained" onClick={onSelectedFolderCancel}>
          Cancel
        </Button>
      </Container>
    </PaperStyle>
  );
};
