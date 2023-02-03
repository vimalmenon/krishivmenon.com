import React from 'react';

import { FileTypeMapping, StorageFolderMapping } from '@constant';
import { useCommonApiContext } from '@context';
import { IGenericReturn } from '@types';

import { IUseItem } from './Item';

export const useItem: IUseItem = (file, fileType) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [isDeleted, setDeleted] = React.useState<boolean>(false);
  const refs = React.useRef<boolean>(true);
  const { makeApiCall } = useCommonApiContext();
  const extension = FileTypeMapping[file.type];
  const folder = StorageFolderMapping[fileType];
  const uploadFile: IGenericReturn<Promise<unknown>> = async () => {
    // await makeApiCall<File, unknown>(
    //   // apis.uploadToS3({
    //   //   folder,
    //   //   fileName: uid,
    //   //   file: file,
    //   //   extension,
    //   //   fileType: file.type,
    //   // })
    // );
    setLoading(false);
  };
  React.useEffect(() => {
    if (refs.current) {
      uploadFile();
      refs.current = false;
    }
  }, []);
  return {
    extension,
    loading,
    isDeleted,
  };
};
