import React from 'react';

import { IUseItem } from './Item';

export const useItem: IUseItem = (file, uid) => {
  const [loading] = React.useState<boolean>(true);
  const [isDeleted] = React.useState<boolean>(false);
  return {
    loading,
    isDeleted,
  };
};
