import React from 'react';

import { IGeneric } from '@types';
import { useFolderHelper } from 'src/Page/Gallery/Gallery.service';

import { IUsePaginationParams, IUsePagination } from './usePagination';

export const usePagination: IGeneric<IUsePaginationParams, IUsePagination> = ({
  pageSize,
  fileLength,
}) => {
  const { currentFolder, setFolderMap, currentFolderId } = useFolderHelper();

  const page = React.useMemo(() => currentFolder.selectedPage, [currentFolder]);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    setFolderMap((folderMap) => {
      const folder = folderMap[currentFolderId];
      return {
        ...folderMap,
        [currentFolderId]: {
          ...folder,
          selectedPage: value,
        },
      };
    });
  };

  return {
    page: currentFolder.selectedPage,
    handleChange,
    paginationCount: Math.ceil(fileLength / pageSize),
    pageStart: (page - 1) * pageSize,
    hasPagination: fileLength > pageSize,
    pageEnd: (page - 1) * pageSize + pageSize,
  };
};
