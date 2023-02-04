import React from 'react';

import { Icon, Confirm, useFileUpload } from '@common';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { Container, Spacing } from '@style';
import { IFolder } from '@types';

import { AddEditFolder } from './AddEditFolder';
import {
  useGallery,
  GalleryContext,
  useCommonGallery,
  initialContextValue,
} from './Gallery.service';
import { GalleryFolder } from './GalleryFolder';
import { UploadFiles } from './UploadFiles';

const GalleryChildren: React.FC = () => {
  const {
    folderMap,
    onFolderAdd,
    deleteConfirm,
    currentFolder,
    addEditFolder,
    onFolderSelect,
    showFileUploader,
    onDeleteConfirmCancel,
    onFolderDeleteConfirm,
    toggleShowUploadFolder,
  } = useCommonGallery();
  return (
    <Container component={'section'} sx={{ flex: '1 1 100%' }}>
      <Container component={'div'} direction="column" sx={{ gap: Spacing.md, flex: '1 1 100%' }}>
        <Container component={'div'} sx={{ gap: Spacing.md, justifyContent: 'space-between' }}>
          <div>
            <Breadcrumbs>
              {folderMap[currentFolder].breadcrumbs.map((value) => {
                return (
                  <Chip
                    key={value}
                    label={folderMap[value].label}
                    onClick={() => onFolderSelect(folderMap[value])}
                  />
                );
              })}
            </Breadcrumbs>
          </div>
          <div>
            <Icon Icon={Icon.icons.CloudUpload} label="Upload" onClick={toggleShowUploadFolder} />
            <Icon Icon={Icon.icons.Add} label="Add" onClick={onFolderAdd} />
          </div>
        </Container>
        <Divider />
        <Confirm
          open={deleteConfirm}
          handleClose={onDeleteConfirmCancel}
          handleConfirm={onFolderDeleteConfirm}
        >
          <>Are you sure you want to delete {addEditFolder?.label}</>
        </Confirm>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {folderMap[currentFolder].folders.map((value) => {
            return <GalleryFolder key={value} folder={folderMap[value]} />;
          })}
        </div>
      </Container>
      {addEditFolder && <AddEditFolder />}
      {showFileUploader && <UploadFiles />}
    </Container>
  );
};
export const Gallery: React.FC = () => {
  const [addEditFolder, setAddEditFolder] = React.useState<IFolder | null>(
    initialContextValue.addEditFolder
  );
  const [deleteConfirm, setDeleteConfirm] = React.useState<boolean>(
    initialContextValue.deleteConfirm
  );
  const { loading, currentFolder, folderMap, onFolderSelect, onFolderUpdate } = useGallery();
  const {
    files,
    onDropAccepted,
    onDropRejected,
    onDeleteFile,
    showFileUploader,
    setShowFileUploader,
  } = useFileUpload();
  return (
    <GalleryContext.Provider
      value={{
        files,
        loading,
        folderMap,
        onDeleteFile,
        currentFolder,
        addEditFolder,
        deleteConfirm,
        onDropAccepted,
        onFolderUpdate,
        onFolderSelect,
        onDropRejected,
        showFileUploader,
        setAddEditFolder,
        setDeleteConfirm,
        setShowFileUploader,
        accept: initialContextValue.accept,
      }}
    >
      {loading ? <div>...Loading</div> : <GalleryChildren />}
    </GalleryContext.Provider>
  );
};
