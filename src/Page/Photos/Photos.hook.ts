import React from 'react';

import { IFolder } from '@types';
import { apis } from '@utility';

const initialValue: IFolder = {
  id: '',
  name: '',
  parent: 'root',
  label: '',
  type: 'folder',
  content: [],
};
export const usePhotos = () => {
  const [createdFolder, setCreateFolder] = React.useState<IFolder | null>(null);
  const [folders] = React.useState<IFolder[]>([]);
  const onFolderAdd = () => {
    setCreateFolder(initialValue);
  };
  const onAddFolderCancel = () => {
    setCreateFolder(null);
  };
  const onAddFolderSave = () => {
    console.log(apis.createFolder());
  };
  const onUpdateFolderDetail = () => {
    console.log(createdFolder);
  };

  return {
    folders,
    createdFolder,
    onFolderAdd,
    onUpdateFolderDetail,
    onAddFolderCancel,
    onAddFolderSave,
  };
};
