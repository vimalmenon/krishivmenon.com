import React from 'react';

import { useCommonApiContext } from '@context';
import { IFolder } from '@types';
import { apis } from '@utility';

import { IGalleryContext } from './Gallery';

const initialContextValue: IGalleryContext = {
  loading: false,
};

export const GalleryContext = React.createContext<IGalleryContext>(initialContextValue);

const initialValue: IFolder = {
  id: '',
  parent: 'root',
  label: '',
  type: 'folder',
  content: [],
};
export const usePhotos = () => {
  const [createdFolder, setCreateFolder] = React.useState<IFolder | null>(null);
  const { makeApiCall } = useCommonApiContext();
  const [folders, setFolders] = React.useState<IFolder[]>([]);

  const ref = React.useRef<boolean>(true);
  const onFolderAdd = () => {
    setCreateFolder(initialValue);
  };
  const onAddFolderCancel = () => {
    setCreateFolder(null);
  };
  const onAddFolderSave = async () => {
    if (createdFolder) {
      const result = (await makeApiCall(apis.createFolder(createdFolder))) as any;
      setCreateFolder(null);
      setFolders(result.data);
    }
  };
  const getFolders = async () => {
    const result = (await makeApiCall(apis.getFolderByParent({ id: 'root' }))) as any;
    setFolders(result.data);
  };
  React.useEffect(() => {
    if (ref.current) {
      getFolders();
      ref.current = false;
    }
  }, []);
  const onAddFolderUpdate = (name: string, value: string) => {
    if (createdFolder) {
      setCreateFolder({
        ...createdFolder,
        [name]: value,
      });
    }
  };
  const onFolderDelete = async (id: string) => {
    const result = (await makeApiCall(apis.deleteFolder({ id }))) as any;
    setFolders(result.data);
  };
  return {
    folders,
    createdFolder,
    onFolderAdd,
    onAddFolderCancel,
    onAddFolderSave,
    onAddFolderUpdate,
    onFolderDelete,
  };
};
