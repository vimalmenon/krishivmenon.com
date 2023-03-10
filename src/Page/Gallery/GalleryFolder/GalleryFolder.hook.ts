import React from 'react';

import { IGeneric, IGenericMethod, IGenericParam, IGalleryFolder } from '@types';

import { IUseClick, IUseGalleryFolder } from './GalleryFolder';
import { useCommonGallery } from '../Gallery.service';

export const useGalleryFolder: IGeneric<IGalleryFolder, IUseGalleryFolder> = (folder) => {
  const { onFolderSelect, closeShowUploadFolder, setSelectedItem } = useCommonGallery();
  const onFinalSingleClick: IGenericMethod = () => {
    setSelectedItem(folder);
    closeShowUploadFolder();
  };
  const onFinalDoubleClick: IGenericMethod = () => {
    onFolderSelect(folder);
    setSelectedItem(null);
    closeShowUploadFolder();
  };
  return {
    onFinalSingleClick,
    onFinalDoubleClick,
  };
};

export const useClick = (singleClick: IGenericMethod, doubleClick: IGenericMethod): IUseClick => {
  const ref = React.useRef<NodeJS.Timeout>();
  const onClick: IGenericParam<React.MouseEvent<HTMLDivElement>> = (e) => {
    switch (e.detail) {
      case 1:
        ref.current = setTimeout(singleClick, 220);
        break;
      case 2:
        clearTimeout(ref.current);
        doubleClick();
        break;
    }
  };
  return {
    onClick,
  };
};
