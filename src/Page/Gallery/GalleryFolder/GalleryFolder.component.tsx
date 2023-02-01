import React from 'react';

import { CommonIcons } from '@constant';

import { IGalleryFolder } from './GalleryFolder';
import { useGalleryFolder, useClick } from './GalleryFolder.hook';
import { FolderStyle } from './GalleryFolder.style';

export const GalleryFolder: React.FC<IGalleryFolder> = ({ folder }) => {
  const { onFinalDoubleClick, onFinalSingleClick } = useGalleryFolder(folder);
  const { onClick } = useClick(onFinalSingleClick, onFinalDoubleClick);
  return (
    <FolderStyle onClick={onClick}>
      <CommonIcons.Folder />
      {folder.label}
    </FolderStyle>
  );
};
