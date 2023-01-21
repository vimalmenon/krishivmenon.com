import React from 'react';

import { FileTypeMapping } from '@constant';
import { useCommonApiContext } from '@context';
import { apis } from '@utility';

import { IUseItem } from './Item';

export const useItem: IUseItem = (file, uid) => {
  const [loading] = React.useState<boolean>(true);
  const [isDeleted] = React.useState<boolean>(false);
  const { makeApiCall } = useCommonApiContext();
  const extension = FileTypeMapping[file.type];
  React.useEffect(() => {
    console.log('this is called');
    makeApiCall(
      apis.uploadToS3({
        folder: 'images',
        fileName: uid,
        file: file,
        extension,
        fileType: file.type,
      })
    );
  }, []);
  return {
    extension,
    loading,
    isDeleted,
  };
};
