import React from 'react';

import { FileUpload } from '@common';
import { CommonIcons } from '@constant';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { IFolder } from '@types';

import {
  GalleryContext,
  initialContextValue,
  useCommonGallery,
  useGallery,
} from './Gallery.service';
import { PhotoFolder } from './GalleryFolder';

const GalleryChildren: React.FC = () => {
  const {
    folders,
    selectedFolder,
    onFolderAdd,
    onSelectedFolderCancel,
    onSelectedFolderLabelUpdate,
    onAddFolderSave,
    onFolderDelete,
  } = useCommonGallery();
  return (
    <div>
      <div>
        <CommonIcons.Add onClick={onFolderAdd} />
      </div>
      <FileUpload fileType="image" />
      <div style={{ display: 'flex', gap: '20px' }}>
        {folders.map((folder) => {
          return <PhotoFolder key={folder.id} folder={folder} />;
        })}
      </div>
      {selectedFolder && (
        <div>
          <div>This is add Folder</div>
          <div>
            <TextField
              variant="standard"
              size="small"
              value={selectedFolder?.label}
              onChange={(e) => onSelectedFolderLabelUpdate(e.target.value)}
            />
          </div>
          <div>
            <Button variant="contained" onClick={onAddFolderSave}>
              Save
            </Button>
            <Button variant="contained" onClick={onSelectedFolderCancel}>
              Cancel
            </Button>
            <Button variant="contained" onClick={onFolderDelete}>
              Delete
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
export const Gallery: React.FC = () => {
  const [selectedFolder, setSelectedFolder] = React.useState<IFolder | null>(
    initialContextValue.selectedFolder
  );
  const { loading, folders, setFolders } = useGallery();
  return (
    <GalleryContext.Provider
      value={{ loading, folders, selectedFolder, setSelectedFolder, setFolders }}
    >
      <GalleryChildren />
    </GalleryContext.Provider>
  );
};
