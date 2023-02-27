import React from 'react';

import { Confirm, useFileUpload } from '@common';
import { IFile, IGalleryFolder } from '@types';

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
  const [selectedFile, setSelectedFile] = React.useState<IFile | null>(
    initialContextValue.selectedFile
  );
  const [deleteConfirm, setDeleteConfirm] = React.useState<boolean>(
    initialContextValue.deleteConfirm
  );
  const { currentFolder, folderMap, onFolderSelect, onFolderUpdate, setFolderMap } = useGallery();
  const {
    files,
    clearFiles,
    onDeleteFile,
    onConvertFile,
    onDropAccepted,
    showFileUploader,
    onFileSetLoading,
    setShowFileUploader,
  } = useFileUpload();
  return (
    <GalleryContext.Provider
      value={{
        files,
        folderMap,
        clearFiles,
        selectedFile,
        setFolderMap,
        onDeleteFile,
        currentFolder,
        addEditFolder,
        deleteConfirm,
        onDropAccepted,
        onFolderUpdate,
        onFolderSelect,
        onConvertFile,
        setSelectedFile,
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
