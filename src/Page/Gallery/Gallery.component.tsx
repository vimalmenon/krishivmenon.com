import React from 'react';

import { Confirm, useFileUpload } from '@common';
import { IGalleryFolder } from '@types';

import {
  useGallery,
  GalleryContext,
  useCommonGallery,
  initialContextValue,
} from './Gallery.service';
import { GalleryRoot } from './Gallery.style';
import { GalleryContent } from './GalleryContent';
import { GalleryHeader } from './GalleryHeader';

const GalleryChildren: React.FC = () => {
  const { deleteConfirm, addEditFolder, onDeleteConfirmCancel, onFolderDeleteConfirm } =
    useCommonGallery();
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
    </GalleryRoot>
  );
};
export const Gallery: React.FC = () => {
  const [addEditFolder, setAddEditFolder] = React.useState<IGalleryFolder | null>(
    initialContextValue.addEditFolder
  );
  const [deleteConfirm, setDeleteConfirm] = React.useState<boolean>(
    initialContextValue.deleteConfirm
  );
  const { currentFolder, folderMap, onFolderSelect, onFolderUpdate } = useGallery();
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
      <GalleryChildren />
    </GalleryContext.Provider>
  );
};
