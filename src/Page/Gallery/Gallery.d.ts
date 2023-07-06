import {
  IFolder,
  IGenericMethod,
  IGalleryFolder,
  IFile,
  PageModeType,
  IGenericParam,
  IGenericReturn,
} from '@types';

export type OnConvertFileType = (file: IUploadedFile, index: number) => Promise<unknown>;

export interface IGalleryContext {
  currentFolderId: string;
  deleteConfirm: boolean;
  selectedFile: IFile | null;
  addEditFolder: PageModeType;
  folder: IGalleryFolder | null;
  selectedFolder: IGalleryFolder | null;
  folderMap: Record<string, IGalleryFolder>;
  syncAllFolders: IGenericMethod;
  currentFolder: IGalleryFolder;
  fileAction: FileActionType;
  setFileAction: React.Dispatch<React.SetStateAction<FileActionType>>;
  setCurrentFolderId: React.Dispatch<React.SetStateAction<string>>;
  setDeleteConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedFile: React.Dispatch<React.SetStateAction<IFile | null>>;
  setAddEditFolder: React.Dispatch<React.SetStateAction<PageModeType>>;
  setFolder: React.Dispatch<React.SetStateAction<IGalleryFolder | null>>;
  onFolderUpdate: (folders: IFolder[], currentFolder: IGalleryFolder) => void;
  setSelectedFolder: React.Dispatch<React.SetStateAction<IGalleryFolder | null>>;
  setFolderMap: React.Dispatch<React.SetStateAction<Record<string, IGalleryFolder>>>;
  file: IFile | null;
  setFile: React.Dispatch<React.SetStateAction<IFile | null>>;
}

export interface IUseGallery {
  folderMap: Record<string, IGalleryFolder>;
  onFolderUpdate: (folder: IFolder[], currentFolder: IGalleryFolder) => void;
  syncAllFolders: IGenericMethod;
  setFolderMap: React.Dispatch<React.SetStateAction<Record<string, IGalleryFolder>>>;
}

export type FileActionType =
  | 'UPLOAD_FILE'
  | 'EDIT_FILE'
  | 'VIEW_FILE'
  | 'MOVE_FILE'
  | 'EDIT_FOLDER'
  | 'DELETE_FILE'
  | 'DELETE_FOLDER'
  | null;

export interface IUseFolderHelper {
  currentFolderId: string;
  onFolderAdd: IGenericMethod;
  folder: IGalleryFolder | null;
  folderMap: Record<string, IGalleryFolder>;
  onFolderEdit: IGenericParam<IGalleryFolder>;
  deleteConfirm: boolean;
  addEditFolder: PageModeType;
  currentFolder: IGalleryFolder;
  selectedFolder: IGalleryFolder | null;
  onFolderChange: IGenericParam<IGalleryFolder>;
  onFolderDelete: IGenericReturn<Promise<void>>;
  onFolderToggle: IGenericParam<IGalleryFolder>;
  setFolderMap: React.Dispatch<React.SetStateAction<Record<string, IGalleryFolder>>>;
  onFolderAddEditSave: IGeneric<IFolderAddEditSaveParams, Promise<unknown>>;
  onFolderAddEditCancel: IGenericMethod;
  onFolderDeleteRequest: IGenericParam<IGalleryFolder>;
  onDeleteConfirmCancel: IGenericMethod;
  onFolderClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, value: IGalleryFolder) => void;
  onFolderDoubleClick: IGenericParam<IGalleryFolder>;
}

export interface IGallery {
  folder?: string;
}

export interface IFolderAddEditSaveParams {
  label: string;
  context: string;
  date?: string;
}
