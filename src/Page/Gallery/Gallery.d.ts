import { IFolder, IGenericMethod, IGalleryFolder, IFile, PageModeType } from '@types';
import { IFileUploadExternal } from 'src/Common/FileUpload/FileUpload';

export type OnConvertFileType = (file: IUploadedFile, index: number) => Promise<unknown>;

export interface IGalleryContext extends IFileUploadExternal {
  currentFolderId: string;
  deleteConfirm: boolean;
  selectedFile: IFile | null;
  clearFiles: IGenericMethod;
  addEditFolder: PageModeType;
  folder: IGalleryFolder | null;
  onConvertFile: OnConvertFileType;
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
}

export interface IUseGallery {
  folderMap: Record<string, IGalleryFolder>;
  onFolderUpdate: (folder: IFolder[], currentFolder: IGalleryFolder) => void;
  syncAllFolders: IGenericMethod;
  setFolderMap: React.Dispatch<React.SetStateAction<Record<string, IGalleryFolder>>>;
}

export type FileActionType = 'UPLOAD_FILE' | 'EDIT_FILE' | 'VIEW_FILE' | 'MOVE_FILE' | null;
