import React from 'react';

import { useCommonApiContext } from '@context';
import { IFolder } from '@types';
import { apis, NotImplemented } from '@utility';

import { IGalleryContext, IGalleryFolder } from './Gallery';

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
  content: [],
};

const rootFolder: IGalleryFolder = {
  id: 'root',
  label: 'My Gallery',
  parent: '',
  content: [],
  folders: [],
  breadcrumbs: [
    {
      id: 'root',
      label: 'My Gallery',
      parent: '',
      content: [],
      folders: [],
      breadcrumbs: [],
    },
  ],
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
      const result = (await makeApiCall(
        selectedFolder.id
          ? apis.updateFolderData({ id: selectedFolder.id }, selectedFolder)
          : apis.createFolder(selectedFolder)
      )) as any;
      setSelectedFolder(null);
      setFolders(result.data);
    }
  };
  const onFolderDelete = async () => {
    const result = (await makeApiCall(apis.deleteFolder({ id: selectedFolder?.id || '' }))) as any;
    setFolders(result.data);
    setSelectedFolder(null);
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
  const [folder] = React.useState<IGalleryFolder>(rootFolder);
  const ref = React.useRef<boolean>(true);
  const { makeApiCall } = useCommonApiContext();
  const getFolders = async (parentId: string) => {
    setLoading(true);
    const result = await makeApiCall<IFolder[]>(apis.getFolderByParent({ id: parentId }));
    setFolders(result);
    setLoading(false);
  };
  const createFolder = async (folder: IGalleryFolder) => {
    const result = await makeApiCall<IFolder[]>(apis.getFolderByParent({ id: folder.id }));
    folder.folders = await Promise.all(
      result.map(async (value) => {
        return await createFolder({
          ...value,
          folders: [],
          breadcrumbs: [...folder.breadcrumbs, { ...value, folders: [], breadcrumbs: [] }],
        });
      })
    );
    return folder;
  };
  React.useEffect(() => {
    if (ref.current) {
      getFolders('root');
      createFolder(rootFolder).then(console.log);
      ref.current = false;
    }
  }, []);
  return {
    folders,
    loading,
    folder,
    setFolders,
  };
};
