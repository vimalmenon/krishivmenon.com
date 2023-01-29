import React from 'react';

import { useCommonApiContext } from '@context';
import { IFolder } from '@types';
import { apis, NotImplemented } from '@utility';

import { IGalleryContext } from './Gallery';

export const initialContextValue: IGalleryContext = {
  loading: false,
  folders: [],
  setFolders: NotImplemented,
  selectedFolder: null,
  setSelectedFolder: NotImplemented,
};

export const GalleryContext = React.createContext<IGalleryContext>(initialContextValue);

const initialValue: IFolder = {
  id: '',
  parent: 'root',
  label: '',
  type: 'folder',
  loading: false,
  content: [],
  folders: [],
};

export const useCommonGallery = () => {
  const { loading, folders, selectedFolder, setSelectedFolder, setFolders } =
    React.useContext<IGalleryContext>(GalleryContext);
  const { makeApiCall } = useCommonApiContext();
  const onFolderAdd = () => {
    setSelectedFolder(initialValue);
  };
  const onSelectedFolderCancel = () => {
    setSelectedFolder(null);
  };
  const onSelectedFolderLabelUpdate = (value: string) => {
    if (selectedFolder) {
      setSelectedFolder({
        ...selectedFolder,
        label: value,
      });
    }
  };
  const onAddFolderSave = async () => {
    if (selectedFolder) {
      const result = (await makeApiCall(apis.createFolder(selectedFolder))) as any;
      setSelectedFolder(null);
      setFolders(result.data);
    }
  };
  const onFolderDelete = async () => {
    const result = (await makeApiCall(apis.deleteFolder({ id: selectedFolder?.id || '' }))) as any;
    setFolders(result.data);
  };
  return {
    loading,
    folders,
    selectedFolder,
    onFolderAdd,
    onSelectedFolderCancel,
    onSelectedFolderLabelUpdate,
    onAddFolderSave,
    setSelectedFolder,
    onFolderDelete,
  };
};

export const useGallery = () => {
  const [loading, setLoading] = React.useState<boolean>(initialContextValue.loading);
  const [folders, setFolders] = React.useState<IFolder[]>(initialContextValue.folders);
  const ref = React.useRef<boolean>(true);
  const { makeApiCall } = useCommonApiContext();
  const getFolders = async (parentId: string) => {
    setLoading(true);
    const result = (await makeApiCall(apis.getFolderByParent({ id: parentId }))) as any;
    setFolders(result.data);
    // result.data.map((folder:IFolder) => {
    //   getFolders(folder.id);
    // })
    setLoading(false);
  };
  React.useEffect(() => {
    if (ref.current) {
      getFolders('root');
      ref.current = false;
    }
  }, []);
  return {
    folders,
    loading,
    setFolders,
  };
};
