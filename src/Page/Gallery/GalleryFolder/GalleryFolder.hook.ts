import React from 'react';

import { IFolder } from '@types';

import { useCommonGallery } from '../Gallery.service';

export const useGalleryFolder = (folder: IFolder) => {
  const { setSelectedFolder } = useCommonGallery();
  let event: any;
  const onFinalSingleClick = () => {
    setSelectedFolder(folder);
  };
  const onFinalDoubleClick = () => {
    console.log('double click');
  };
  const onFolderClick = (e: React.MouseEvent<HTMLDivElement>) => {
    switch (e.detail) {
      case 1:
        event = setTimeout(onFinalSingleClick, 300);
        break;
      case 2:
        clearTimeout(event);
        setTimeout(onFinalDoubleClick, 200);
        break;
    }
  };

  return {
    onFolderClick,
  };
};
