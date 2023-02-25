import { IFolder, IGenericMethod, IGenericParam, IGalleryFolder } from '@types';
import { IFileUploadExternal } from 'src/Common/FileUpload/FileUpload';

export interface IGalleryContext extends IFileUploadExternal {
  currentFolder: string;
  folderMap: Record<string, IGalleryFolder>;
  addEditFolder: IGalleryFolder | null;
  onFolderSelect: IGenericParam<IGalleryFolder>;
  setAddEditFolder: React.Dispatch<React.SetStateAction<IGalleryFolder | null>>;
  onFolderUpdate: (folders: IFolder[], currentFolder: IGalleryFolder) => void;
  deleteConfirm: boolean;
  setDeleteConfirm: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IUseGallery {
  folderMap: Record<string, IGalleryFolder>;
  currentFolder: string;
  onFolderSelect: IGenericParam<IGalleryFolder>;
  onFolderUpdate: (folder: IFolder[], currentFolder: IGalleryFolder) => void;
}

export interface IUseCommonGalleryContext extends IFileUploadExternal {
  addEditFolder: IGalleryFolder | null;
  folderMap: Record<string, IGalleryFolder>;
  onFolderAdd: IGenericMethod;
  onSelectedFolderCancel: IGenericMethod;
  currentFolder: string;
  onFolderDelete: IGenericMethod;
  onAddFolderSave: IGenericReturn<Promise<unknown>>;
  setAddEditFolder: React.Dispatch<React.SetStateAction<IGalleryFolder | null>>;
  onFolderSelect: IGenericParam<IGalleryFolder>;
  onSelectedFolderLabelUpdate: IGenericParam<string>;
  onFolderDeleteConfirm: IGenericMethod;
  deleteConfirm: boolean;
  closeShowUploadFolder: IGenericMethod;
  openShowUploadFolder: IGenericMethod;
  onDeleteConfirmCancel: IGenericMethod;
  toggleShowUploadFolder: IGenericMethod;
  uploadFiles: IGenericMethod;
}
