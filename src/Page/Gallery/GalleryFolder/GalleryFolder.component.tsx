import React from 'react';

import { Icon } from '@common';
import Skeleton from '@mui/material/Skeleton';

import { IGalleryFolder } from './GalleryFolder';
import { useGalleryFolder, useClick } from './GalleryFolder.hook';
import {
  FolderStyleRoot,
  FolderIconStyle,
  FolderLabelStyle,
  FolderDetailStyle,
} from './GalleryFolder.style';

export const GalleryFolder: React.FC<IGalleryFolder> = ({ folder, isSelected }) => {
  const { onFinalDoubleClick, onFinalSingleClick } = useGalleryFolder(folder);
  const { onClick } = useClick(onFinalSingleClick, onFinalDoubleClick);
  return (
    <FolderStyleRoot onClick={onClick} className={isSelected ? 'active' : ''}>
      <FolderIconStyle>
        <Icon.icons.Folder fontSize="large" />
      </FolderIconStyle>
      <FolderLabelStyle>{folder.label}</FolderLabelStyle>
      <FolderDetailStyle>
        {folder.loading ? (
          <Skeleton width="100%" />
        ) : (
          <>
            <span>Folder: {folder.folders.length}</span>
            <span>Files: {folder.files.length}</span>
          </>
        )}
      </FolderDetailStyle>
    </FolderStyleRoot>
  );
};
