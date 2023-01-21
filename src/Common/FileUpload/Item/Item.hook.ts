import React from 'react';

import { FileTypeMapping, StorageFolderMapping } from '@constant';
import { useCommonApiContext } from '@context';
import { IGenericMethod } from '@types';
import { apis } from '@utility';

import { IUseItem } from './Item';

export const useItem: IUseItem = (file, uid, fileType) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [isDeleted, setDeleted] = React.useState<boolean>(false);
  const refs = React.useRef<boolean>(true);
  const { makeApiCall } = useCommonApiContext();
  const extension = FileTypeMapping[file.type];
  React.useEffect(() => {
    if (!refs.current) {
      makeApiCall<File, unknown>(
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
  const onDelete: IGenericMethod = async () => {
    setLoading(false);
    await makeApiCall<unknown, unknown>(
      apis.deleteFromS3({
        folder: StorageFolderMapping[fileType],
        fileName: uid,
        extension,
        fileType: file.type,
      })
    );
    setLoading(false);
    setDeleted(true);
  };
  return {
    extension,
    loading,
    isDeleted,
    onDelete,
  };
};
