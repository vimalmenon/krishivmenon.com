import React from 'react';

import { useCommonApiContext } from '@context';
import { IFolder, IGenericMethod, IGenericParam, IGenericReturn } from '@types';
import { apis, NotImplemented } from '@utility';

import { IGalleryContext, IGalleryFolder, IUseGallery, IUseCommonGalleryContext } from './Gallery';

const initialValue: IFolder = {
  id: '',
  parent: 'root',
  label: '',
  content: [],
  files: [],
};

const rootFolder: IGalleryFolder = {
  breadcrumbs: ['root'],
  folders: [],
  loading: true,
  id: 'root',
  label: 'My Gallery',
  parent: '',
  content: [],
  files: [],
};

export const initialContextValue: IGalleryContext = {
  loading: false,
  currentFolder: rootFolder.id,
  addEditFolder: null,
  setAddEditFolder: NotImplemented,
  onFolderSelect: NotImplemented,
  onFolderUpdate: NotImplemented,
  deleteConfirm: false,
  setDeleteConfirm: NotImplemented,
  folderMap: {
    [rootFolder.id]: rootFolder,
  },
  showUploadFolder: false,
  setShowUploadFolder: NotImplemented,
};

export const GalleryContext = React.createContext<IGalleryContext>(initialContextValue);

export const useCommonGallery: IGenericReturn<IUseCommonGalleryContext> = () => {
  const {
    loading,
    addEditFolder,
    currentFolder,
    setAddEditFolder,
    onFolderSelect,
    folderMap,
    onFolderUpdate,
    deleteConfirm,
    setDeleteConfirm,
  } = React.useContext<IGalleryContext>(GalleryContext);
  const { makeApiCall } = useCommonApiContext();
  const onFolderAdd: IGenericMethod = () => {
    setAddEditFolder({ ...initialValue, parent: currentFolder });
  };
  const onSelectedFolderCancel: IGenericMethod = () => {
    setAddEditFolder(null);
  };
  const onSelectedFolderLabelUpdate: IGenericParam<string> = (value) => {
    if (addEditFolder) {
      setAddEditFolder({
        ...addEditFolder,
        label: value,
      });
    }
  };
  const onAddFolderSave: IGenericReturn<Promise<unknown>> = async () => {
    if (addEditFolder) {
      const result = await makeApiCall<IFolder[]>(
        addEditFolder.id
          ? apis.updateFolderData({ id: addEditFolder.id }, addEditFolder)
          : apis.createFolder(addEditFolder)
      );
      onFolderUpdate(result, folderMap[currentFolder]);
      setAddEditFolder(null);
    }
  };
  const onFolderDelete: IGenericReturn<Promise<unknown>> = async () => {
    const result = await makeApiCall<IFolder[]>(apis.deleteFolder({ id: addEditFolder?.id || '' }));
    onFolderUpdate(result, folderMap[currentFolder]);
    setAddEditFolder(null);
    setDeleteConfirm(true);
  };
  const onFolderDeleteConfirm: IGenericMethod = () => {
    setAddEditFolder(null);
  };
  return {
    loading,
    addEditFolder,
    folderMap,
    onFolderAdd,
    onSelectedFolderCancel,
    onSelectedFolderLabelUpdate,
    onAddFolderSave,
    setAddEditFolder,
    onFolderDelete,
    onFolderSelect,
    currentFolder,
    onFolderDeleteConfirm,
    deleteConfirm,
  };
};

export const useGallery: IGenericReturn<IUseGallery> = () => {
  const [loading, setLoading] = React.useState<boolean>(initialContextValue.loading);
  const [folderMap, setFolderMap] = React.useState<Record<string, IGalleryFolder>>(
    initialContextValue.folderMap
  );
  const [currentFolder, setCurrentFolder] = React.useState<string>(rootFolder.id);
  const ref = React.useRef<boolean>(true);
  const { makeApiCall } = useCommonApiContext();
  const createFolderMapping = async (
    folder: IGalleryFolder,
    breadcrumbs: string[]
  ): Promise<void> => {
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
  const onFolderSelect: IGenericParam<IGalleryFolder> = (folder): void => {
    setCurrentFolder(folder.id);
  };
  const onFolderUpdate = async (
    folders: IFolder[],
    currentFolder: IGalleryFolder
  ): Promise<void> => {
    const folderIds = folders.map((data) => {
      createFolderMapping(
        {
          ...data,
          loading: true,
          breadcrumbs: [...currentFolder.breadcrumbs, data.id],
          folders: [],
        },
        [...currentFolder.breadcrumbs, data.id]
      );
      return data.id;
    });
    setFolderMap((folderMap) => {
      return {
        ...folderMap,
        [currentFolder.id]: {
          ...currentFolder,
          folders: folderIds,
        },
      };
    });
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
    onFolderUpdate,
  };
};
