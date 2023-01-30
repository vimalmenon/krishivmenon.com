import React from 'react';

import { IGalleryFolder } from '../Gallery';
import { useCommonGallery } from '../Gallery.service';

export const useGalleryFolder = (folder: IGalleryFolder) => {
  const { setSelectedFolder, onFolderSelect } = useCommonGallery();
  let event: any;
  const onFinalSingleClick = () => {
    setSelectedFolder(folder);
  };
  const onFinalDoubleClick = () => {
    onFolderSelect(folder);
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
