import React from 'react';

import { FileTypeMapping, StorageFolderMapping } from '@constant';
import { useCommonApiContext } from '@context';
import { IGenericMethod } from '@types';
import { apis } from '@utility';

import { IUseItem } from './Item';

export const useItem: IUseItem = (file, uid, fileType) => {
  const [loading] = React.useState<boolean>(true);
  const [isDeleted, setDeleted] = React.useState<boolean>(false);
  const refs = React.useRef<boolean>(true);
  const { makeApiCall } = useCommonApiContext();
  const extension = FileTypeMapping[file.type];
  React.useEffect(() => {
    if (!refs.current) {
      makeApiCall(
        apis.uploadToS3({
          folder: StorageFolderMapping[fileType],
          fileName: uid,
          file: file,
          extension,
          fileType: file.type,
        })
      );
      // refs.current = false;
    }
  }, []);
  const onDelete: IGenericMethod = () => {
    setDeleted(true);
  };
  return {
    extension,
    loading,
    isDeleted,
    onDelete,
  };
};
