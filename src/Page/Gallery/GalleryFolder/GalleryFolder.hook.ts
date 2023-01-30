import React from 'react';

import { IGalleryFolder } from '../Gallery';
import { useCommonGallery } from '../Gallery.service';

export const useGalleryFolder = (folder: IGalleryFolder) => {
  const { setSelectedFolder, onFolderSelect } = useCommonGallery();
  const onFinalSingleClick = () => {
    setSelectedFolder(folder);
  };
  const onFinalDoubleClick = () => {
    onFolderSelect(folder);
    setSelectedFolder(null);
  };
  const onFolderClick = (e: React.MouseEvent<HTMLDivElement>) => {
    switch (e.detail) {
      case 1:
        onFinalSingleClick();
        break;
      case 2:
        onFinalDoubleClick();
        break;
    }
  };

  return {
    onFolderClick,
  };
};
