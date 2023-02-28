import React from 'react';

import { AcceptVideo, AcceptImages } from '@constant';
import { useCommonApiContext } from '@context';
import { apis } from '@data';
import {
  IFile,
  IFolder,
  IGenericParam,
  IGenericReturn,
  IGalleryFolder,
  IGenericMethod,
} from '@types';
import { NotImplemented } from '@utility';

import { IGalleryContext, IUseGallery, IUseCommonGalleryContext } from './Gallery';

const initialValue: IGalleryFolder = {
  id: '',
  label: '',
  files: [],
  folders: [],
  loading: false,
  parent: 'root',
  breadcrumbs: [],
  isFolderFolded: false,
  isFileFolded: false,
};

const rootFolder: IGalleryFolder = {
  files: [],
  id: 'root',
  parent: '',
  folders: [],
  loading: true,
  label: 'My Gallery',
  breadcrumbs: ['root'],
  isFolderFolded: false,
  isFileFolded: false,
};

export const initialContextValue: IGalleryContext = {
  files: [],
  selectedItem: null,
  deleteConfirm: false,
  showFileUploader: false,
  clearFiles: NotImplemented,
  currentFolder: rootFolder.id,
  setFolderMap: NotImplemented,
  onDeleteFile: NotImplemented,
  onConvertFile: NotImplemented,
  onFolderSelect: NotImplemented,
  onDropAccepted: NotImplemented,
  onFolderUpdate: NotImplemented,
  setSelectedItem: NotImplemented,
  setDeleteConfirm: NotImplemented,
  onFileSetLoading: NotImplemented,
  setShowFileUploader: NotImplemented,
  accept: { ...AcceptVideo, ...AcceptImages },
  folderMap: {
    [rootFolder.id]: rootFolder,
  },
};

export const GalleryContext = React.createContext<IGalleryContext>(initialContextValue);

export const useCommonGallery: IGenericReturn<IUseCommonGalleryContext> = () => {
  const {
    files,
    accept,
    folderMap,
    clearFiles,
    setFolderMap,
    onDeleteFile,
    selectedItem,
    currentFolder,
    deleteConfirm,
    onConvertFile,
    onFolderUpdate,
    onFolderSelect,
    onDropAccepted,
    setSelectedItem,
    onFileSetLoading,
    setDeleteConfirm,
    showFileUploader,
    setShowFileUploader,
  } = React.useContext<IGalleryContext>(GalleryContext);
  const { makeApiCall } = useCommonApiContext();
  const onFolderAdd: IGenericMethod = () => {
    setSelectedItem({ ...initialValue, parent: currentFolder });
    setShowFileUploader(false);
  };
  const onSelectedFolderCancel: IGenericMethod = () => {
    setSelectedItem(null);
  };
  const onSelectedFolderLabelUpdate: IGenericParam<string> = (value) => {
    if (selectedItem) {
      setSelectedItem({
        ...selectedItem,
        label: value,
      });
    }
  };
  const onAddFolderSave: IGenericReturn<Promise<unknown>> = async () => {
    if (selectedItem) {
      if ('breadcrumbs' in selectedItem) {
        const result = await makeApiCall<IFolder[]>(
          selectedItem.id
            ? apis.updateFolderData({ id: selectedItem.id }, selectedItem)
            : apis.createFolder(selectedItem)
        );
        onFolderUpdate(result, folderMap[currentFolder]);
        setSelectedItem(null);
      }
    }
  };
  const onFolderDelete: IGenericMethod = () => {
    setDeleteConfirm(true);
  };
  const onFolderDeleteConfirm: IGenericReturn<Promise<unknown>> = async () => {
    const result = await makeApiCall<IFolder[]>(apis.deleteFolder({ id: selectedItem?.id || '' }));
    onFolderUpdate(result, folderMap[currentFolder]);
    setSelectedItem(null);
    setDeleteConfirm(false);
  };
  const onDeleteConfirmCancel: IGenericMethod = () => {
    setDeleteConfirm(false);
  };
  const closeShowUploadFolder: IGenericMethod = () => {
    setShowFileUploader(false);
  };
  const openShowUploadFolder: IGenericMethod = () => {
    setShowFileUploader(true);
  };
  const toggleShowUploadFolder: IGenericMethod = () => {
    setShowFileUploader(!showFileUploader);
    setSelectedItem(null);
  };
  const uploadFiles: IGenericMethod = async () => {
    await Promise.all(
      files.map(async (file, key) => {
        onFileSetLoading(key, true);
        await makeApiCall(
          apis.uploadToS3(currentFolder, {
            data: file.file,
            fileName: file.label,
          })
        );
        onFileSetLoading(key, false);
      })
    );
    const result = await makeApiCall<IFile[]>(apis.getFilesFromS3({ folder: currentFolder }));
    setFolderMap((folderMap) => {
      const selectedFolder = folderMap[currentFolder];
      return {
        ...folderMap,
        [currentFolder]: {
          ...selectedFolder,
          files: result,
        },
      };
    });
    setShowFileUploader(false);
    clearFiles();
  };
  const onFileDelete: IGenericMethod = () => {
    if (selectedItem && 'type' in selectedItem) {
      makeApiCall(apis.deleteFromS3({ folder: currentFolder, fileName: selectedItem.id }));
    }
  };
  const onFolderToggle: IGenericParam<IGalleryFolder> = (folder) => {
    setFolderMap((folderMap) => {
      return {
        ...folderMap,
        [folder.id]: {
          ...folder,
          isFolderFolded: !folder.isFolderFolded,
        },
      };
    });
  };
  const onFileToggle: IGenericParam<IGalleryFolder> = (folder) => {
    setFolderMap((folderMap) => {
      return {
        ...folderMap,
        [folder.id]: {
          ...folder,
          isFileFolded: !folder.isFileFolded,
        },
      };
    });
  };
  return {
    files,
    accept,
    folderMap,
    uploadFiles,
    onFolderAdd,
    onFileDelete,
    onDeleteFile,
    onFileToggle,
    selectedItem,
    currentFolder,
    deleteConfirm,
    onConvertFile,
    onFolderToggle,
    onDropAccepted,
    onFolderDelete,
    onFolderSelect,
    setSelectedItem,
    onAddFolderSave,
    showFileUploader,
    onFileSetLoading,
    setShowFileUploader,
    openShowUploadFolder,
    onFolderDeleteConfirm,
    onDeleteConfirmCancel,
    closeShowUploadFolder,
    onSelectedFolderCancel,
    toggleShowUploadFolder,
    onSelectedFolderLabelUpdate,
  };
};

export const useGallery: IGenericReturn<IUseGallery> = () => {
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
    const result = await makeApiCall<IFolder[]>(apis.getFolderByParent({ id: folder.id }));
    const folders = result.map((value) => {
      setFolderMap((folderMap) => {
        return {
          ...folderMap,
          [value.id]: {
            ...value,
            loading: true,
            breadcrumbs: [...breadcrumbs, value.id],
            folders: [],
            files: [],
            isFolderFolded: false,
            isFileFolded: false,
          },
        };
      });
      createFolderMapping(
        {
          ...value,
          loading: true,
          breadcrumbs: [...breadcrumbs, value.id],
          folders: [],
          files: [],
          isFolderFolded: false,
          isFileFolded: false,
        },
        [...breadcrumbs, value.id]
      );
      return value.id;
    });
    const files = await makeApiCall<IFile[]>(apis.getFilesFromS3({ folder: folder.id }));
    setFolderMap((folderMap) => {
      const parentFolder = folderMap[folder.id];
      return {
        ...folderMap,
        [folder.id]: {
          ...parentFolder,
          loading: false,
          folders,
          files,
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
      setFolderMap((folderMap) => {
        return {
          ...folderMap,
          [data.id]: {
            ...data,
            loading: true,
            breadcrumbs: [...currentFolder.breadcrumbs, data.id],
            folders: [],
            files: [],
            isFolderFolded: false,
            isFileFolded: false,
          },
        };
      });
      createFolderMapping(
        {
          ...data,
          loading: true,
          breadcrumbs: [...currentFolder.breadcrumbs, data.id],
          folders: [],
          files: [],
          isFolderFolded: false,
          isFileFolded: false,
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
      createFolderMapping(rootFolder, rootFolder.breadcrumbs);
      ref.current = false;
    }
  }, []);
  return {
    folderMap,
    setFolderMap,
    currentFolder,
    onFolderSelect,
    onFolderUpdate,
  };
};
