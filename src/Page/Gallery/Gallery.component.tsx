import React from 'react';

import { Confirm, useFileUpload } from '@common';
import { Container } from '@style';
import { IFolder } from '@types';

import { AddEditFolder } from './AddEditFolder';
import {
  useGallery,
  GalleryContext,
  useCommonGallery,
  initialContextValue,
} from './Gallery.service';
import { GalleryRoot } from './Gallery.style';
import { GalleryContent } from './GalleryContent';
import { GalleryHeader } from './GalleryHeader';
import { UploadFiles } from './UploadFiles';

const GalleryChildren: React.FC = () => {
  const {
    deleteConfirm,
    addEditFolder,
    showFileUploader,
    onDeleteConfirmCancel,
    onFolderDeleteConfirm,
  } = useCommonGallery();
  return (
    <GalleryRoot>
      <Confirm
        open={deleteConfirm}
        handleClose={onDeleteConfirmCancel}
        handleConfirm={onFolderDeleteConfirm}
      >
        <>Are you sure you want to delete {addEditFolder?.label}</>
      </Confirm>
      <GalleryHeader />
      <GalleryContent />
      <Container component={'section'} sx={{ flex: '1 1 100%' }}>
        {addEditFolder && <AddEditFolder />}
        {showFileUploader && <UploadFiles />}
      </Container>
    </GalleryRoot>
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
    onFileSetLoading,
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
        setAddEditFolder,
        onFileSetLoading,
        showFileUploader,
        setDeleteConfirm,
        setShowFileUploader,
        accept: initialContextValue.accept,
      }}
    >
      {loading ? <div>...Loading</div> : <GalleryChildren />}
    </GalleryContext.Provider>
  );
};
