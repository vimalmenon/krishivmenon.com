import React from 'react';

import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';

import { Icon, Confirm } from '@common';

import { AddEditFolder } from './AddEditFolder';
import {
  GalleryContentRoot,
  GalleryContentFolderStyle,
  GalleryContentFilesRoot,
} from './GalleryContent.style';
import { GalleryContentFiles } from './GalleryContentFiles';
import { GalleryContentFolders } from './GalleryContentFolders';
import { GalleryFolderLoading } from './GalleryContentFolders/GalleryFolder';
import { MoveFile } from './MoveFile';
import { UploadFiles } from './UploadFiles';
import { useFileHelper, useFolderHelper } from '../Gallery.service';

export const GalleryContent: React.FC = () => {
  const {
    currentFolder,
    onFolderToggle,
    onFolderDelete,
    selectedFolder,
    deleteConfirm,
    onDeleteConfirmCancel,
  } = useFolderHelper();
  const { selectedFile, onFileDelete } = useFileHelper();

  if (currentFolder.loading) {
    return (
      <GalleryContentRoot>
        <GalleryContentFilesRoot>
          <div>
            <Divider textAlign="left">
              <Chip
                label="Folders"
                icon={
                  currentFolder.isFolderFolded ? <Icon.icons.DownArrow /> : <Icon.icons.UpArrow />
                }
                onClick={() => onFolderToggle(currentFolder)}
              />
            </Divider>
          </div>
          <Collapse in={!currentFolder.isFolderFolded}>
            <GalleryContentFolderStyle>
              <GalleryFolderLoading />
              <GalleryFolderLoading />
              <GalleryFolderLoading />
            </GalleryContentFolderStyle>
          </Collapse>
        </GalleryContentFilesRoot>
      </GalleryContentRoot>
    );
  }
  return (
    <GalleryContentRoot>
      <Confirm
        open={deleteConfirm}
        handleClose={onDeleteConfirmCancel}
        handleConfirmPromise={() => (selectedFile ? onFileDelete() : onFolderDelete())}
      >
        <>
          Are you sure you want to delete {selectedFolder?.label} {selectedFile?.label}{' '}
        </>
      </Confirm>
      <AddEditFolder />
      <UploadFiles />
      <MoveFile />
      {currentFolder.files.length === 0 && currentFolder.folders.length === 0 ? (
        <GalleryContentFilesRoot>No files and folder found.</GalleryContentFilesRoot>
      ) : (
        <GalleryContentFilesRoot>
          <GalleryContentFolders />
          <GalleryContentFiles />
        </GalleryContentFilesRoot>
      )}
    </GalleryContentRoot>
  );
};
