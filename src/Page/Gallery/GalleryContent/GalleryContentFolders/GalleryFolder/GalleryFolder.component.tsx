import React from 'react';

import Hidden from '@mui/material/Hidden';
import Skeleton from '@mui/material/Skeleton';
import Tooltip from '@mui/material/Tooltip';
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

export const getFolderToolTip = (value: Record<string, string>): string => {
  if (value.date) {
    return `${value.context}
    Date: ${value.date}
  `;
  }
  return `${value.context}`;
};
export const GalleryFolder: React.FC<IGalleryFolder> = ({ folder, isSelected }) => {
  const { onFolderClick, onFolderEdit, onFolderDeleteRequest, onFolderDoubleClick } =
    useFolderHelper();
  const onEdit: React.MouseEventHandler<SVGSVGElement> = (e) => {
    e.stopPropagation();
    onFolderEdit(folder);
  };
  return (
    <FolderStyleRoot
      onClick={(e) => onFolderClick(e, folder)}
      onTouchEnd={() => onFolderDoubleClick(folder)}
      className={clsx({ active: isSelected })}
    >
      <FolderIconStyle>
        <Container component={'div'} sx={{ flex: '0' }}>
          <Icon.icons.Folder fontSize="large" />
        </Container>

        <Container component={'div'} sx={{ flex: '0' }}>
          <Hidden lgDown={true}>
            {!folder.loading ? (
              <>
                {folder.files.length === 0 &&
                folder.folders.length === 0 &&
                !folder.canCreateFolder ? (
                  <Icon.icons.Delete
                    onClick={() => onFolderDeleteRequest(folder)}
                    fontSize="small"
                  />
                ) : null}
                {folder.metadata.context ? (
                  <Tooltip
                    title={
                      <div style={{ whiteSpace: 'pre-line' }}>
                        {getFolderToolTip(folder.metadata)}
                      </div>
                    }
                  >
                    <Icon.icons.Info fontSize="small" onClick={onEdit} />
                  </Tooltip>
                ) : null}
              </>
            ) : null}
          </Hidden>
        </Container>
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
