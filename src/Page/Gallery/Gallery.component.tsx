import React from 'react';

import { Confirm, useFileUpload } from '@common';
import { IFolder } from '@types';

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
