import React from 'react';

import { useCommonApiContext } from '@context';
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
  const { makeApiCall } = useCommonApiContext();
  const [folders] = React.useState<IFolder[]>([]);
  const onFolderAdd = () => {
    setCreateFolder(initialValue);
  };
  const onAddFolderCancel = () => {
    setCreateFolder(null);
  };
  const onAddFolderSave = () => {
    if (createdFolder) {
      makeApiCall(apis.createFolder(createdFolder));
    }
  };
  const onAddFolderUpdate = (name: string, value: string) => {
    if (createdFolder) {
      setCreateFolder({
        ...createdFolder,
        [name]: value,
      });
    }
  };
  return {
    folders,
    createdFolder,
    onFolderAdd,
    onAddFolderCancel,
    onAddFolderSave,
    onAddFolderUpdate,
  };
};
