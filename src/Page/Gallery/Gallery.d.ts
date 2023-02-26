import { IFolder, IGenericMethod, IGenericParam, IGalleryFolder, IFile } from '@types';
import { IFileUploadExternal } from 'src/Common/FileUpload/FileUpload';

export interface IGalleryContext extends IFileUploadExternal {
  currentFolder: string;
  deleteConfirm: boolean;
  selectedFile: IFile | null;
  addEditFolder: IGalleryFolder | null;
  folderMap: Record<string, IGalleryFolder>;
  onFolderSelect: IGenericParam<IGalleryFolder>;
  setDeleteConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedFile: React.Dispatch<React.SetStateAction<IFile | null>>;
  onFolderUpdate: (folders: IFolder[], currentFolder: IGalleryFolder) => void;
  setAddEditFolder: React.Dispatch<React.SetStateAction<IGalleryFolder | null>>;
}

export interface IUseGallery {
  currentFolder: string;
  folderMap: Record<string, IGalleryFolder>;
  onFolderSelect: IGenericParam<IGalleryFolder>;
  onFolderUpdate: (folder: IFolder[], currentFolder: IGalleryFolder) => void;
}

export interface IUseCommonGalleryContext extends IFileUploadExternal {
  currentFolder: string;
  deleteConfirm: boolean;
  onFolderAdd: IGenericMethod;
  onFolderDelete: IGenericMethod;
  addEditFolder: IGalleryFolder | null;
  onFolderDeleteConfirm: IGenericMethod;
  onSelectedFolderCancel: IGenericMethod;
  folderMap: Record<string, IGalleryFolder>;
  onFolderSelect: IGenericParam<IGalleryFolder>;
  onAddFolderSave: IGenericReturn<Promise<unknown>>;
  onSelectedFolderLabelUpdate: IGenericParam<string>;
  setAddEditFolder: React.Dispatch<React.SetStateAction<IGalleryFolder | null>>;
  closeShowUploadFolder: IGenericMethod;
  openShowUploadFolder: IGenericMethod;
  onDeleteConfirmCancel: IGenericMethod;
  toggleShowUploadFolder: IGenericMethod;
  uploadFiles: IGenericMethod;
  selectedFile: IFile | null;
  setSelectedFile: React.Dispatch<React.SetStateAction<IFile | null>>;
  onFileDelete: IGenericMethod;
}
