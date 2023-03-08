import React from 'react';

import { Icon, PromiseLoadingButton, Image } from '@common';
import { ENV } from '@constant';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Container, PageTitle } from '@style';

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
        {'breadcrumbs' in selectedItem ? (
          <>
            <Container
              component={'div'}
              sx={{ justifyContent: 'space-between', alignItems: 'center' }}
            >
              <PageTitle>
                {selectedItem?.id ? (
                  <span>Edit {selectedItem.label}</span>
                ) : (
                  <span>Add Folder</span>
                )}
              </PageTitle>
              {selectedItem?.id &&
                selectedItem.files.length === 0 &&
                selectedItem.folders.length === 0 && (
                  <Icon Icon={Icon.icons.Delete} label="Delete" onClick={onFolderDelete} />
                )}
            </Container>
            <div>
              <FormControl variant="outlined" fullWidth size="small">
                <InputLabel htmlFor="folder-name">Folder name</InputLabel>
                {selectedItem.id ? (
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
                    label="Folder name"
                  />
                ) : (
                  <OutlinedInput
                    id="folder-name"
                    value={selectedItem?.label}
                    onChange={(e) => onSelectedFolderLabelUpdate(e.target.value)}
                    label="Folder name"
                    endAdornment={
                      <InputAdornment position="end">
                        <Icon
                          Icon={edit ? Icon.icons.Cancel : Icon.icons.Edit}
                          edge="end"
                          disabled={true}
                        />
                      </InputAdornment>
                    }
                  />
                )}
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
              <Button
                variant="outlined"
                onClick={onSelectedFolderCancel}
                startIcon={<Icon.icons.Cancel />}
              >
                Cancel
              </Button>
            </Container>
          </>
        ) : (
          <>
            <Container
              component={'div'}
              sx={{ justifyContent: 'space-between', alignItems: 'center' }}
            >
              <PageTitle>Edit file</PageTitle>
              <Icon
                Icon={Icon.icons.Delete}
                label="Delete"
                onClick={onFileDelete}
                showLoading={true}
              />
            </Container>
            <Container component={'div'} sx={{ justifyContent: 'center' }}>
              <div>
                <Image
                  src={`${ENV.ASSET_S3_BUCKET}/${selectedItem.path}`}
                  height={200} // This sets what resolution the component should load from the CDN and the size of the resulting image
                />
              </div>
            </Container>
            <Container component={'div'} sx={{ flex: '1', justifyContent: 'center' }}>
              {selectedItem.id}
            </Container>
            <Container component={'div'} sx={{ justifyContent: 'space-between' }}>
              <Button variant="contained" onClick={onFolderDelete} startIcon={<Icon.icons.Save />}>
                Delete
              </Button>
              <Button
                variant="outlined"
                onClick={() => setSelectedItem(null)}
                startIcon={<Icon.icons.Cancel />}
              >
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
