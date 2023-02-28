import React from 'react';

import { Icon, PromiseLoadingButton } from '@common';
import { ENV } from '@constant';
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
    selectedItem,
    onFileDelete,
    onFolderDelete,
    onAddFolderSave,
    setSelectedItem,
    onSelectedFolderCancel,
    onSelectedFolderLabelUpdate,
  } = useCommonGallery();
  const [edit, setEdit] = React.useState<boolean>(false);
  if (selectedItem) {
    return (
      <PaperStyle>
        {selectedItem && 'breadcrumbs' in selectedItem ? (
          <>
            <Container component={'div'} sx={{ justifyContent: 'space-between' }}>
              {selectedItem?.id ? <span>Edit {selectedItem.label}</span> : <span>Add Folder</span>}
              {selectedItem?.id &&
                selectedItem.files.length === 0 &&
                selectedItem.folders.length === 0 && (
                  <Icon Icon={Icon.icons.Delete} label="Delete" onClick={onFolderDelete} />
                )}
            </Container>
            <div>
              <FormControl variant="outlined" fullWidth size="small">
                <InputLabel htmlFor="folder-name">Folder name</InputLabel>
                <OutlinedInput
                  id="folder-name"
                  value={selectedItem?.label}
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
              <PromiseLoadingButton
                variant="contained"
                onClick={onAddFolderSave}
                startIcon={<Icon.icons.Save />}
              >
                <span>{selectedItem?.id ? 'Update' : 'Create'}</span>
              </PromiseLoadingButton>
              <Button variant="outlined" onClick={onSelectedFolderCancel}>
                Cancel
              </Button>
            </Container>
          </>
        ) : (
          <>
            <Container component={'div'} sx={{ justifyContent: 'space-between' }}>
              <span>Edit file</span>
              <Icon Icon={Icon.icons.Delete} label="Delete" onClick={onFileDelete} />
            </Container>
            <div>{selectedItem.id}</div>
            <Container component={'div'} sx={{ flex: '1' }}>
              <div>
                <img
                  src={`${ENV.ASSET_S3_BUCKET}/${selectedItem.path}`}
                  alt={selectedItem.name}
                  width={'175px'}
                />
                {selectedItem.name}
              </div>
            </Container>
            <Container component={'div'} sx={{ justifyContent: 'space-between' }}>
              <Button variant="contained" onClick={onFolderDelete}>
                Delete
              </Button>
              <Button variant="outlined" onClick={() => setSelectedItem(null)}>
                Cancel
              </Button>
            </Container>
          </>
        )}
      </PaperStyle>
    );
  }
  return null;
};
