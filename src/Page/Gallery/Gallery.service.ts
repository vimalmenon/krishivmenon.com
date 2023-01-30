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
  id: 'root',
  label: 'My Gallery',
  parent: '',
  content: [],
  folders: [],
  index: [],
  loading: true,
};

export const initialContextValue: IGalleryContext = {
  loading: false,
  folder: rootFolder,
  currentFolder: rootFolder.id,
  selectedFolder: null,
  setSelectedFolder: NotImplemented,
  index: [],
  onFolderSelect: NotImplemented,
};

export const GalleryContext = React.createContext<IGalleryContext>(initialContextValue);

export const useCommonGallery = () => {
  const {
    loading,
    folder,
    selectedFolder,
    index,
    currentFolder,
    setSelectedFolder,
    onFolderSelect,
  } = React.useContext<IGalleryContext>(GalleryContext);
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
    index,
    loading,
    folder,
    selectedFolder,
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
  const [folder, setFolder] = React.useState<IGalleryFolder>(rootFolder);
  const [currentFolder, setCurrentFolder] = React.useState<string>(
    '5e816101-602c-4572-a788-e9f046254447'
  );
  const [index, setIndex] = React.useState<number[]>(initialContextValue.index);
  const ref = React.useRef<boolean>(true);
  const { makeApiCall } = useCommonApiContext();
  const createFolder = async (folder: IGalleryFolder, index: number[]) => {
    const result = await makeApiCall<IFolder[]>(apis.getFolderByParent({ id: folder.id }));
    folder.folders = await Promise.all(
      result.map(async (value, key) => {
        if (value.id === currentFolder) {
          setIndex((index) => [...index, key]);
        }
        return await createFolder(
          {
            ...value,
            folders: [],
            loading: true,
            index: [...folder.index, key],
          },
          [...index, key]
        );
      })
    );
    folder.loading = false;
    return folder;
  };
  const onFolderSelect = (folder: IGalleryFolder) => {
    setCurrentFolder(folder.id);
    setIndex(folder.index);
  };
  const onFolderUpdate = (folders: IGalleryFolder) => {
    index.reduce;
  };
  React.useEffect(() => {
    if (ref.current) {
      setLoading(true);
      createFolder(rootFolder, []).then((data) => {
        setFolder(data);
        setLoading(false);
      });
      ref.current = false;
    }
  }, []);
  return {
    loading,
    folder,
    index,
    currentFolder,
    onFolderSelect,
    onFolderUpdate,
  };
};

export const getFolder = (folder: IGalleryFolder, index: number[]) => {
  const trail = [folder];
  let temp = folder;
  index.forEach((element) => {
    temp = temp.folders[element];
    trail.push(temp);
  });
  return trail;
};
