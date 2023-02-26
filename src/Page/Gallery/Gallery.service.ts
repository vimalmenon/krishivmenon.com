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
};

const rootFolder: IGalleryFolder = {
  files: [],
  id: 'root',
  parent: '',
  folders: [],
  loading: true,
  label: 'My Gallery',
  breadcrumbs: ['root'],
};

export const initialContextValue: IGalleryContext = {
  files: [],
  selectedFile: null,
  addEditFolder: null,
  deleteConfirm: false,
  showFileUploader: false,
  onDeleteFile: NotImplemented,
  currentFolder: rootFolder.id,
  onFolderUpdate: NotImplemented,
  onFolderSelect: NotImplemented,
  onDropAccepted: NotImplemented,
  setSelectedFile: NotImplemented,
  setDeleteConfirm: NotImplemented,
  setAddEditFolder: NotImplemented,
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
    selectedFile,
    onDeleteFile,
    addEditFolder,
    currentFolder,
    deleteConfirm,
    onFolderUpdate,
    onFolderSelect,
    onDropRejected,
    onDropAccepted,
    setSelectedFile,
    onFileSetLoading,
    setAddEditFolder,
    setDeleteConfirm,
    showFileUploader,
    setShowFileUploader,
  } = React.useContext<IGalleryContext>(GalleryContext);
  const { makeApiCall } = useCommonApiContext();
  const onFolderAdd: IGenericMethod = () => {
    setAddEditFolder({ ...initialValue, parent: currentFolder });
    setShowFileUploader(false);
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
  const onFolderDelete: IGenericMethod = () => {
    setDeleteConfirm(true);
  };
  const onFolderDeleteConfirm: IGenericReturn<Promise<unknown>> = async () => {
    const result = await makeApiCall<IFolder[]>(apis.deleteFolder({ id: addEditFolder?.id || '' }));
    onFolderUpdate(result, folderMap[currentFolder]);
    setAddEditFolder(null);
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
    setAddEditFolder(null);
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
  };
  const onFileDelete: IGenericMethod = () => {
    if (selectedFile) {
      makeApiCall(apis.deleteFromS3({ folder: currentFolder, fileName: selectedFile.id }));
    }
  };
  return {
    files,
    accept,
    folderMap,
    uploadFiles,
    onFolderAdd,
    onDeleteFile,
    addEditFolder,
    selectedFile,
    currentFolder,
    deleteConfirm,
    onDropRejected,
    onDropAccepted,
    onFolderDelete,
    onFolderSelect,
    onAddFolderSave,
    setSelectedFile,
    showFileUploader,
    onFileSetLoading,
    setAddEditFolder,
    setShowFileUploader,
    openShowUploadFolder,
    onFolderDeleteConfirm,
    onDeleteConfirmCancel,
    closeShowUploadFolder,
    onSelectedFolderCancel,
    toggleShowUploadFolder,
    onFileDelete,
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
      createFolderMapping(
        {
          ...data,
          loading: true,
          breadcrumbs: [...currentFolder.breadcrumbs, data.id],
          folders: [],
          files: [],
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
    currentFolder,
    onFolderSelect,
    onFolderUpdate,
  };
};
