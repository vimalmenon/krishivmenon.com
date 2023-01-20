import React from 'react';

import { FileTypeMapping } from '@constant';

import { IUseItem } from './Item';

export const useItem: IUseItem = (file, uid) => {
  const [loading] = React.useState<boolean>(true);
  const [isDeleted] = React.useState<boolean>(false);
  const extension = FileTypeMapping[file.type];
  return {
    extension,
    loading,
    isDeleted,
  };
};
