import React from 'react';

import { IFolder } from '@types';

export const usePhotoFolder = (folder: IFolder) => {
  const [loading] = React.useState<boolean>(false);
  const [folderName, setFolderName] = React.useState<string>(folder.label);
  const onFolderNameChangeCancel = () => {
    console.log(folder);
  };
  return {
    loading,
    folderName,
    setFolderName,
    onFolderNameChangeCancel,
  };
};
