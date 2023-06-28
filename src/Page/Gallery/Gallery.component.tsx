import React from 'react';

import { useFileUpload } from '@common';
import { IFile, IGalleryFolder, PageModeType } from '@types';

import { FileActionType } from './Gallery';
import { useGallery, GalleryContext, initialContextValue, rootFolder } from './Gallery.service';
import { GalleryRoot } from './Gallery.style';
import { GalleryContent } from './GalleryContent';
import { GalleryHeader } from './GalleryHeader';

const GalleryChildren: React.FC = () => {
  return (
    <GalleryRoot>
      <GalleryHeader />
      <GalleryContent />
    </GalleryRoot>
  );
};
export const Gallery: React.FC = () => {
  const [selectedFolder, setSelectedFolder] = React.useState<IGalleryFolder | null>(
    initialContextValue.selectedFolder
  );
  const [selectedFile, setSelectedFile] = React.useState<IFile | null>(
    initialContextValue.selectedFile
  );
  const [deleteConfirm, setDeleteConfirm] = React.useState<boolean>(
    initialContextValue.deleteConfirm
  );
  const [addEditFolder, setAddEditFolder] = React.useState<PageModeType>(
    initialContextValue.addEditFolder
  );
  const [currentFolderId, setCurrentFolderId] = React.useState<string>(rootFolder.id);
  const { folderMap, onFolderUpdate, setFolderMap, syncAllFolders } = useGallery();
  const currentFolder = React.useMemo(
    () => folderMap[currentFolderId],
    [folderMap[currentFolderId]]
  );

  // This is used for edit and delete folder
  const [folder, setFolder] = React.useState<IGalleryFolder | null>(null);

  const [fileAction, setFileAction] = React.useState<FileActionType>(null);

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
        folder,
        folderMap,
        clearFiles,
        fileAction,
        selectedFile,
        setFolderMap,
        currentFolder,
        setFolder,
        onDeleteFile,
        addEditFolder,
        selectedFolder,
        onConvertFile,
        setFileAction,
        currentFolderId,
        deleteConfirm,
        onDropAccepted,
        onFolderUpdate,
        syncAllFolders,
        setAddEditFolder,
        setSelectedFile,
        onFileSetLoading,
        showFileUploader,
        setCurrentFolderId,
        setDeleteConfirm,
        setSelectedFolder,
        setShowFileUploader,
      }}
    >
      <GalleryChildren />
    </GalleryContext.Provider>
  );
};
