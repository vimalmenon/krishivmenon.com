import React from 'react';

import { FileTypeMapping, StorageFolderMapping } from '@constant';
import { useCommonApiContext } from '@context';
import { IGenericMethod, IGenericReturn } from '@types';
import { apis } from '@utility';

import { IUseItem } from './Item';

export const useItem: IUseItem = (file, uid, fileType) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [isDeleted, setDeleted] = React.useState<boolean>(false);
  const refs = React.useRef<boolean>(true);
  const { makeApiCall } = useCommonApiContext();
  const extension = FileTypeMapping[file.type];
  const folder = StorageFolderMapping[fileType];
  const uploadFile: IGenericReturn<Promise<unknown>> = async () => {
    await makeApiCall<File, unknown>(
      apis.uploadToS3({
        folder,
        fileName: uid,
        file: file,
        extension,
        fileType: file.type,
      })
    );
    await makeApiCall(
      apis.addAssetToS3({
        path: `${folder}/${uid}.${extension}`,
        uid,
        alias: `${uid}.${extension}`,
        type: file.type,
        orphan: false,
      })
    );
    setLoading(false);
  };
  React.useEffect(() => {
    if (!refs.current) {
      uploadFile();
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
