import React from 'react';

import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';

import { Icon } from '@common';
import { Container } from '@style';

import { IGalleryHelper } from './GalleryHelper';
import { useFileHelper, useFileUploadHelper, useFolderHelper } from '../../Gallery.service';
import { GalleryContentFolderStyle, GalleryContentFilesRoot } from '../GalleryContent.style';
import { GalleryFolderLoading } from '../GalleryContentFolders/GalleryFolder';
import { GalleryUploadContainer } from '../GalleryUploadContainer';

export const GalleryHelper: React.FC<IGalleryHelper> = ({
  gallery,
  GalleryFolder,
  GalleryFile,
}) => {
  const { currentFolder, onFolderToggle } = useFolderHelper();
  const { onFileToggle } = useFileHelper();
  const { uploadFiles } = useFileUploadHelper();
  const showCollapse = React.useMemo(
    () => currentFolder.folders.length && currentFolder.files.length,
    [currentFolder]
  );
  if (gallery.loading) {
    return (
      <GalleryContentFolderStyle>
        <GalleryFolderLoading />
        <GalleryFolderLoading />
        <GalleryFolderLoading />
      </GalleryContentFolderStyle>
    );
  }
  if (gallery.files.length === 0 && gallery.folders.length === 0) {
    return (
      <GalleryUploadContainer uploadFiles={uploadFiles} canUpload={currentFolder.canUploadFile}>
        <GalleryContentFilesRoot>No files and folder found.</GalleryContentFilesRoot>
      </GalleryUploadContainer>
    );
  }
  return (
    <GalleryContentFilesRoot>
      <GalleryUploadContainer uploadFiles={uploadFiles} canUpload={currentFolder.canUploadFile}>
        {currentFolder.folders.length ? (
          <Container component="div" direction="column" sx={{ gap: 2 }}>
            {showCollapse ? (
              <Divider textAlign="left">
                <Chip
                  label="Folders"
                  icon={
                    currentFolder.isFolderFolded ? <Icon.icons.DownArrow /> : <Icon.icons.UpArrow />
                  }
                  onClick={() => onFolderToggle(currentFolder)}
                />
              </Divider>
            ) : null}
            <Collapse in={!currentFolder.isFolderFolded}>
              <GalleryFolder />
            </Collapse>
          </Container>
        ) : null}

        {currentFolder.files.length ? (
          <Container component="div" direction="column" sx={{ gap: 2, mt: 2 }}>
            {showCollapse ? (
              <Divider textAlign="left">
                <Chip
                  label="Files"
                  icon={
                    currentFolder.isFileFolded ? <Icon.icons.DownArrow /> : <Icon.icons.UpArrow />
                  }
                  onClick={() => onFileToggle(currentFolder)}
                />
              </Divider>
            ) : null}
            <Collapse in={!currentFolder.isFileFolded}>
              <GalleryFile />
            </Collapse>
          </Container>
        ) : null}
      </GalleryUploadContainer>
    </GalleryContentFilesRoot>
  );
};
