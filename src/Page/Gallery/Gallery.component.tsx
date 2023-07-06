import React from 'react';

import { IFile, IGalleryFolder, PageModeType } from '@types';

import { FileActionType, IGallery } from './Gallery';
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
export const Gallery: React.FC<IGallery> = ({ folder: folderId = rootFolder.id }) => {
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
  const [currentFolderId, setCurrentFolderId] = React.useState<string>(folderId);
  const { folderMap, onFolderUpdate, setFolderMap, syncAllFolders } = useGallery();
  const currentFolder = React.useMemo(
    () => folderMap[currentFolderId],
    [folderMap[currentFolderId]]
  );

  // This is used for edit and delete folder
  const [folder, setFolder] = React.useState<IGalleryFolder | null>(null);
  const [file, setFile] = React.useState<IFile | null>(null);

  const [fileAction, setFileAction] = React.useState<FileActionType>(null);

  return (
    <GalleryContext.Provider
      value={{
        file,
        setFile,
        folder,
        folderMap,
        fileAction,
        selectedFile,
        setFolderMap,
        currentFolder,
        setFolder,
        addEditFolder,
        selectedFolder,
        setFileAction,
        currentFolderId,
        deleteConfirm,
        onFolderUpdate,
        syncAllFolders,
        setAddEditFolder,
        setSelectedFile,
        setCurrentFolderId,
        setDeleteConfirm,
        setSelectedFolder,
      }}
    >
      <GalleryChildren />
    </GalleryContext.Provider>
  );
};
