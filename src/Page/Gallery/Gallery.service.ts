import React from 'react';

import { useCommonApiContext } from '@context';
import { IFolder } from '@types';
import { apis, NotImplemented } from '@utility';

import { IGalleryContext, IGalleryFolder } from './Gallery';

const initialValue: IFolder = {
  id: '',
  parent: 'root',
  label: '',
  content: [],
};

const rootFolder: IGalleryFolder = {
  breadcrumbs: ['root'],
  folders: [],
  loading: true,
  id: 'root',
  label: 'My Gallery',
  parent: '',
  content: [],
};

export const initialContextValue: IGalleryContext = {
  loading: false,
  currentFolder: rootFolder.id,
  selectedFolder: null,
  setSelectedFolder: NotImplemented,
  onFolderSelect: NotImplemented,
  folderMap: {
    [rootFolder.id]: rootFolder,
  },
};

export const GalleryContext = React.createContext<IGalleryContext>(initialContextValue);

export const useCommonGallery = () => {
  const { loading, selectedFolder, currentFolder, setSelectedFolder, onFolderSelect, folderMap } =
    React.useContext<IGalleryContext>(GalleryContext);
  const { makeApiCall } = useCommonApiContext();
  const onFolderAdd = () => {
    setSelectedFolder({ ...initialValue, parent: currentFolder });
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
      const result = await makeApiCall<IFolder[]>(
        selectedFolder.id
          ? apis.updateFolderData({ id: selectedFolder.id }, selectedFolder)
          : apis.createFolder(selectedFolder)
      );
      setSelectedFolder(null);
    }
  };
  const onFolderDelete = async () => {
    const result = await makeApiCall<IFolder[]>(
      apis.deleteFolder({ id: selectedFolder?.id || '' })
    );
    setSelectedFolder(null);
  };
  return {
    loading,
    selectedFolder,
    folderMap,
    onFolderAdd,
    onSelectedFolderCancel,
    onSelectedFolderLabelUpdate,
    onAddFolderSave,
    setSelectedFolder,
    onFolderDelete,
    onFolderSelect,
    currentFolder,
  };
};

export const useGallery = () => {
  const [loading, setLoading] = React.useState<boolean>(initialContextValue.loading);
  const [folderMap, setFolderMap] = React.useState<Record<string, IGalleryFolder>>(
    initialContextValue.folderMap
  );
  const [currentFolder, setCurrentFolder] = React.useState<string>(rootFolder.id);
  const ref = React.useRef<boolean>(true);
  const { makeApiCall } = useCommonApiContext();
  const createFolderMapping = async (folder: IGalleryFolder, breadcrumbs: string[]) => {
    setFolderMap((folderMap) => {
      return {
        ...folderMap,
        [folder.id]: {
          ...folder,
        },
      };
    });
    const result = await makeApiCall<IFolder[]>(apis.getFolderByParent({ id: folder.id }));
    await Promise.all(
      result.map(async (value) => {
        setFolderMap((folderMap) => {
          const parentFolder = folderMap[folder.id];
          return {
            ...folderMap,
            [parentFolder.id]: {
              ...parentFolder,
              folders: [...parentFolder.folders, value.id],
            },
          };
        });
        const result = await createFolderMapping(
          {
            ...value,
            loading: true,
            breadcrumbs: [...breadcrumbs, value.id],
            folders: [],
          },
          [...breadcrumbs, value.id]
        );
        return result;
      })
    );
    setFolderMap((folderMap) => {
      const parentFolder = folderMap[folder.id];
      return {
        ...folderMap,
        [folder.id]: {
          ...parentFolder,
          loading: false,
        },
      };
    });
  };
  const onFolderSelect = (folder: IGalleryFolder) => {
    setCurrentFolder(folder.id);
  };
  React.useEffect(() => {
    if (ref.current) {
      setLoading(true);
      createFolderMapping(rootFolder, rootFolder.breadcrumbs).then(() => {
        setLoading(false);
      });
      ref.current = false;
    }
  }, []);
  return {
    loading,
    folderMap,
    currentFolder,
    onFolderSelect,
  };
};
