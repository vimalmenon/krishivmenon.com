import React from 'react';

import Skeleton from '@mui/material/Skeleton';
import { clsx } from 'clsx';

import { Icon } from '@common';
import { Container } from '@style';

import { IGalleryFolder } from './GalleryFolder';
import {
  FolderStyleRoot,
  FolderIconStyle,
  FolderLabelStyle,
  FolderDetailStyle,
} from './GalleryFolder.style';
import { useFolderHelper } from '../../../Gallery.service';

export const GalleryFolder: React.FC<IGalleryFolder> = ({ folder, isSelected }) => {
  const { onFolderClick, onFolderEdit, onFolderDeleteRequest } = useFolderHelper();
  const onEdit = (e: any) => {
    e.stopPropagation();
    onFolderEdit(folder);
  };
  return (
    <FolderStyleRoot
      onClick={(e) => onFolderClick(e, folder)}
      className={clsx({ active: isSelected })}
    >
      <FolderIconStyle>
        <Container component={'div'} sx={{ flex: '0' }}>
          <Icon.icons.Folder fontSize="large" />
        </Container>
        {!folder.isFixed ? (
          <Container component={'div'} sx={{ flex: '0' }}>
            <Icon.icons.Edit onClick={onEdit} fontSize="small" />
            <Icon.icons.Delete onClick={() => onFolderDeleteRequest(folder)} fontSize="small" />
          </Container>
        ) : null}
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

export const GalleryFolderLoading: React.FC = () => {
  return (
    <FolderStyleRoot>
      <FolderIconStyle>
        <Skeleton variant="circular" height="30px" width="30px" />
      </FolderIconStyle>
      <FolderLabelStyle>
        <Skeleton width="100%" />
      </FolderLabelStyle>
      <FolderDetailStyle>
        <Skeleton width="100%" />
      </FolderDetailStyle>
    </FolderStyleRoot>
  );
};
