import React from 'react';

import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';

import { Icon } from '@common';

import { AddEditFolder } from './AddEditFolder';
import { DeleteFileFolder } from './DeleteFileFolder';
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
import { ViewFile } from './ViewFile';
import { useFolderHelper } from '../Gallery.service';

export const GalleryContent: React.FC = () => {
  const { currentFolder, onFolderToggle } = useFolderHelper();

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
      <DeleteFileFolder />
      <AddEditFolder />
      <UploadFiles />
      <MoveFile />
      <ViewFile />
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
