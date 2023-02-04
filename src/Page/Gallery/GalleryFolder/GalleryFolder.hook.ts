import React from 'react';

import { IGeneric, IGenericMethod, IGenericParam } from '@types';

import { IUseClick, IUseGalleryFolder } from './GalleryFolder';
import { IGalleryFolder } from '../Gallery';
import { useCommonGallery } from '../Gallery.service';

export const useGalleryFolder: IGeneric<IGalleryFolder, IUseGalleryFolder> = (folder) => {
  const { setAddEditFolder, onFolderSelect, closeShowUploadFolder } = useCommonGallery();
  const onFinalSingleClick: IGenericMethod = () => {
    setAddEditFolder(folder);
    closeShowUploadFolder();
  };
  const onFinalDoubleClick: IGenericMethod = () => {
    onFolderSelect(folder);
    setAddEditFolder(null);
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
