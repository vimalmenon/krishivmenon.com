import React from 'react';

import { useCommonApiContext } from '@context';
import { apis } from '@data';
import { useClickHelper } from '@hook';
import {
  IFile,
  IFolder,
  IGenericParam,
  IGenericReturn,
  IGalleryFolder,
  IGenericMethod,
  IGeneric,
} from '@types';
import { NotImplemented } from '@utility';

import {
  IGalleryContext,
  IUseGallery,
  IUseFolderHelper,
  IFolderAddEditSaveParams,
} from './Gallery';

// const initialValue: IGalleryFolder = {
//   id: '',
//   label: '',
//   files: [],
//   folders: [],
//   loading: false,
//   parent: 'root',
//   breadcrumbs: [],
//   isFolderFolded: false,
//   isFileFolded: false,
// };

export const rootFolder: IGalleryFolder = {
  files: [],
  id: 'root',
  parent: '',
  folders: [],
  loading: true,
  label: 'My Gallery',
  breadcrumbs: ['root'],
  isFolderFolded: false,
  isFileFolded: false,
  isFileLocked: true,
  selectedPage: 1,
};

export const initialContextValue: IGalleryContext = {
  file: null,
  files: [],
  folder: null,
  selectedFile: null,
  deleteConfirm: false,
  selectedFolder: null,
  showFileUploader: false,
  clearFiles: NotImplemented,
  currentFolderId: rootFolder.id,
  addEditFolder: 'VIEW',
  setFile: NotImplemented,
  setFolder: NotImplemented,
  setFolderMap: NotImplemented,
  onDeleteFile: NotImplemented,
  onConvertFile: NotImplemented,
  onDropAccepted: NotImplemented,
  onFolderUpdate: NotImplemented,
  setSelectedFile: NotImplemented,
  setCurrentFolderId: NotImplemented,
  setDeleteConfirm: NotImplemented,
  onFileSetLoading: NotImplemented,
  setSelectedFolder: NotImplemented,
  setShowFileUploader: NotImplemented,
  setAddEditFolder: NotImplemented,
  syncAllFolders: NotImplemented,
  folderMap: {
    [rootFolder.id]: rootFolder,
  },
  currentFolder: rootFolder,
  fileAction: null,
  setFileAction: NotImplemented,
};

export const GalleryContext = React.createContext<IGalleryContext>(initialContextValue);

export const useGallery: IGenericReturn<IUseGallery> = () => {
  const [folderMap, setFolderMap] = React.useState<Record<string, IGalleryFolder>>(
    initialContextValue.folderMap
  );
  const ref = React.useRef<boolean>(true);
  const { makeApiCall } = useCommonApiContext();
  const createFolderMapping = async (
    folder: IGalleryFolder,
    breadcrumbs: string[]
  ): Promise<void> => {
    const result = await makeApiCall<IFolder[]>(apis.getFolderByParent({ id: folder.id }));
    const folders = result.map((value) => {
      setFolderMap((folderMap) => {
        const previousSelectedPage = folderMap[value.id]?.selectedPage || 1;
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
            selectedPage: previousSelectedPage,
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
          selectedPage: 1,
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
  const onFolderUpdate = async (
    folders: IFolder[],
    currentFolder: IGalleryFolder
  ): Promise<void> => {
    const folderIds = folders.map((data) => {
      setFolderMap((folderMap) => {
        const previousSelectedPage = folderMap[data.id]?.selectedPage || 1;
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
            selectedPage: previousSelectedPage || 1,
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
          selectedPage: 1,
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
  const syncAllFolders: IGenericMethod = () => {
    createFolderMapping(rootFolder, rootFolder.breadcrumbs);
  };
  return {
    folderMap,
    setFolderMap,
    onFolderUpdate,
    syncAllFolders,
  };
};

export const useFolderHelper = (): IUseFolderHelper => {
  const {
    folder,
    setFolder,
    folderMap,
    selectedFolder,
    currentFolderId,
    setSelectedFolder,
    setSelectedFile,
    setDeleteConfirm,
    onFolderUpdate,
    setAddEditFolder,
    addEditFolder,
    currentFolder,
    setCurrentFolderId,
    setFolderMap,
    deleteConfirm,
  } = React.useContext<IGalleryContext>(GalleryContext);

  const { makeApiCall } = useCommonApiContext();

  const onFolderSingleClick: IGenericParam<IGalleryFolder> = (value) => {
    setSelectedFolder(value);
    setSelectedFile(null);
  };
  const onFolderDoubleClick: IGenericParam<IGalleryFolder> = (value) => {
    onFolderChange(value);
    setSelectedFile(null);
  };
  const { onClick } = useClickHelper<IGalleryFolder>(onFolderSingleClick, onFolderDoubleClick);

  // All the delete methods
  const onFolderDelete: IGenericReturn<Promise<void>> = async () => {
    if (folder) {
      const result = await makeApiCall<IFolder[]>(apis.deleteFolder({ id: folder.id }));
      onFolderUpdate(result, currentFolder);
      setFolder(null);
      setDeleteConfirm(false);
    }
  };
  const onFolderDeleteRequest: IGenericParam<IGalleryFolder> = (folder) => {
    setFolder(folder);
    setDeleteConfirm(true);
  };

  // All the ADD and EDIT Folder
  const onFolderAdd: IGenericMethod = () => {
    setAddEditFolder('ADD');
  };
  const onFolderEdit: IGenericParam<IGalleryFolder> = (folder) => {
    setFolder(folder);
    setAddEditFolder('EDIT');
  };
  const onFolderAddEditCancel = () => {
    setAddEditFolder('VIEW');
    setFolder(null);
  };
  const onFolderAddEditSave: IGeneric<IFolderAddEditSaveParams, Promise<unknown>> = async ({
    label,
    context,
  }: IFolderAddEditSaveParams) => {
    if (addEditFolder === 'ADD') {
      const createdFolder: IFolder = {
        id: '',
        label: label,
        metadata: {
          context,
        },
        parent: currentFolderId,
      };
      const result = await makeApiCall<IFolder[]>(apis.createFolder(createdFolder));
      onFolderUpdate(result, currentFolder);
    }
    if (folder && addEditFolder === 'EDIT') {
      const result = await makeApiCall<IFolder[]>(
        apis.updateFolderData({ id: folder.id }, { ...folder, label, metadata: { context } })
      );
      onFolderUpdate(result, currentFolder);
      setFolder(null);
    }
    setAddEditFolder('VIEW');
  };

  // Navigation to different folder
  const onFolderChange = (value: IGalleryFolder) => {
    setCurrentFolderId(value.id);
  };
  // Toggle folder
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
  const onDeleteConfirmCancel: IGenericMethod = () => {
    setDeleteConfirm(false);
    setSelectedFile(null);
    setSelectedFolder(null);
  };
  return {
    folder,
    folderMap,
    onFolderAdd,
    onFolderEdit,
    deleteConfirm,
    addEditFolder,
    currentFolder,
    selectedFolder,
    onFolderChange,
    onFolderDelete,
    onFolderToggle,
    currentFolderId,
    setFolderMap,
    onFolderAddEditSave,
    onFolderAddEditCancel,
    onFolderDeleteRequest,
    onDeleteConfirmCancel,
    onFolderClick: onClick,
  };
};

export const useFileHelper = () => {
  const {
    currentFolderId,
    selectedFile,
    setSelectedFile,
    setDeleteConfirm,
    setSelectedFolder,
    setFolderMap,
    setFileAction,
    fileAction,
    setFolder,
    setFile,
    file,
  } = React.useContext<IGalleryContext>(GalleryContext);
  const { makeApiCall } = useCommonApiContext();
  const onFileSelect: IGenericParam<IFile> = (file) => {
    setSelectedFile(file);
    setSelectedFolder(null);
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
  const onFileDeleteRequest: IGenericParam<IFile> = (file) => {
    setDeleteConfirm(true);
    setSelectedFile(file);
  };
  const onFileDelete: IGenericReturn<Promise<void>> = async () => {
    if (selectedFile) {
      await makeApiCall(apis.deleteFromS3({ folder: currentFolderId, fileName: selectedFile.id }));
      const files = await makeApiCall<IFile[]>(apis.getFilesFromS3({ folder: currentFolderId }));
      setFolderMap((folderMap) => {
        const folder = folderMap[currentFolderId];
        return {
          ...folderMap,
          [currentFolderId]: {
            ...folder,
            files,
          },
        };
      });
      setDeleteConfirm(false);
      setFolder(null);
    }
  };

  const onFileMoveRequest: IGenericParam<IFile> = (file) => {
    setFileAction('MOVE_FILE');
    setSelectedFile(file);
  };
  const onViewFile: IGenericParam<IFile> = (file) => {
    setSelectedFile(file);
    setFileAction('VIEW_FILE');
  };
  const onViewFileCancel: IGenericMethod = () => {
    setSelectedFile(null);
    setFileAction(null);
  };
  const onFileEditSave: IGeneric<IFile, Promise<unknown>> = async (file) => {
    await makeApiCall(apis.updateFileFromS3({ folder: currentFolderId, data: file }));
    const files = await makeApiCall<IFile[]>(apis.getFilesFromS3({ folder: currentFolderId }));
    setFolderMap((folderMap) => {
      const folder = folderMap[currentFolderId];
      return {
        ...folderMap,
        [currentFolderId]: {
          ...folder,
          files,
        },
      };
    });
    setFileAction(null);
    setFile(null);
  };
  const onFileConvert: IGeneric<IFile, Promise<void>> = async (file) => {
    await makeApiCall(apis.convertHeicFileToJpeg(file));
    const files = await makeApiCall<IFile[]>(apis.getFilesFromS3({ folder: currentFolderId }));
    setFolderMap((folderMap) => {
      const folder = folderMap[currentFolderId];
      return {
        ...folderMap,
        [currentFolderId]: {
          ...folder,
          files,
        },
      };
    });
  };
  const onFileEdit: IGenericParam<IFile> = (file) => {
    setFileAction('EDIT_FILE');
    setFile(file);
  };
  const onFileEditCancel = () => {
    setFileAction(null);
    setFile(null);
  };
  return {
    file,
    onViewFile,
    fileAction,
    onFileToggle,
    selectedFile,
    onFileSelect,
    onFileDelete,
    onFileConvert,
    onFileEdit,
    onFileEditCancel,
    onFileEditSave,
    onViewFileCancel,
    onFileMoveRequest,
    onFileDeleteRequest,
  };
};

export const useFileUploadHelper = () => {
  const {
    files,
    clearFiles,
    setFolderMap,
    onDeleteFile,
    currentFolderId,
    onConvertFile,
    onDropAccepted,
    setSelectedFile,
    onFileSetLoading,
    setDeleteConfirm,
    fileAction,
    setFileAction,
  } = React.useContext<IGalleryContext>(GalleryContext);
  const { makeApiCall } = useCommonApiContext();

  const onFileUploadOpen: IGenericMethod = () => {
    setFileAction('UPLOAD_FILE');
  };
  const onFileUploadCancel: IGenericMethod = () => {
    setFileAction(null);
  };

  const uploadFiles: IGenericMethod = async () => {
    await Promise.all(
      files.map(async (file, key) => {
        onFileSetLoading(key, true);
        await makeApiCall(
          apis.uploadToS3(currentFolderId, {
            data: file.file,
            name: file.label,
          })
        );
        onFileSetLoading(key, false);
      })
    );
    const result = await makeApiCall<IFile[]>(apis.getFilesFromS3({ folder: currentFolderId }));
    setFolderMap((folderMap) => {
      const selectedFolder = folderMap[currentFolderId];
      return {
        ...folderMap,
        [currentFolderId]: {
          ...selectedFolder,
          files: result,
        },
      };
    });
    setFileAction(null);
    clearFiles();
  };
  const onFileDeleteRequest: IGenericParam<IFile> = (file) => {
    setSelectedFile(file);
    setDeleteConfirm(true);
  };
  return {
    files,
    fileAction,
    uploadFiles,
    onDeleteFile,
    onConvertFile,
    onDropAccepted,
    onFileUploadOpen,
    onFileUploadCancel,
    onFileDeleteRequest,
  };
};

export const useFileMoveHelper = () => {
  const { folderMap, setSelectedFile, setFileAction, fileAction, selectedFile, syncAllFolders } =
    React.useContext<IGalleryContext>(GalleryContext);
  const { makeApiCall } = useCommonApiContext();

  const [selectedFolder, setSelectedFolder] = React.useState<IGalleryFolder | null>(null);
  const [currentFolderId, setCurrentFolderId] = React.useState<string>(rootFolder.id);
  const folder = React.useMemo(() => folderMap[currentFolderId], [folderMap[currentFolderId]]);
  React.useEffect(() => {
    if (!fileAction) {
      setCurrentFolderId(rootFolder.id);
      setSelectedFolder(null);
    }
  }, [fileAction]);
  const onFileMoveCancel: IGenericMethod = () => {
    setFileAction(null);
    setSelectedFile(null);
  };
  const onFileMoveRequest: IGenericParam<IFile> = (file) => {
    setFileAction('MOVE_FILE');
    setSelectedFile(file);
  };
  const onFolderSingleClick: IGenericParam<IGalleryFolder> = (value) => {
    setSelectedFolder(value);
  };
  const onFolderDoubleClick: IGenericParam<IGalleryFolder> = (value) => {
    setCurrentFolderId(value.id);
    setSelectedFolder(null);
  };
  const { onClick } = useClickHelper<IGalleryFolder>(onFolderSingleClick, onFolderDoubleClick);
  const onFileMove: IGenericReturn<Promise<void>> = async () => {
    if (selectedFolder && selectedFile) {
      await makeApiCall(apis.moveFileToFolder({ folder: selectedFolder.id, data: selectedFile }));
      syncAllFolders();
      setFileAction(null);
      setSelectedFile(null);
      setSelectedFolder(null);
      setCurrentFolderId(rootFolder.id);
    }
  };
  return {
    folder,
    onClick,
    folderMap,
    fileAction,
    onFileMove,
    selectedFolder,
    onFileMoveCancel,
    onFileMoveRequest,
    onFolderChange: onFolderDoubleClick,
  };
};
