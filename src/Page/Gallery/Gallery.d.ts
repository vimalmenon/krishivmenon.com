import { IFolder, IGenericMethod, IGenericParam, IGalleryFolder, IFile } from '@types';
import { IFileUploadExternal } from 'src/Common/FileUpload/FileUpload';

export type OnConvertFileType = (file: IUploadedFile, index: number) => Promise<unknown>;

export interface IGalleryContext extends IFileUploadExternal {
  currentFolder: string;
  deleteConfirm: boolean;
  clearFiles: IGenericMethod;
  selectedFile: IFile | null;
  onConvertFile: OnConvertFileType;
  addEditFolder: IGalleryFolder | null;
  folderMap: Record<string, IGalleryFolder>;
  onFolderSelect: IGenericParam<IGalleryFolder>;
  setDeleteConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedFile: React.Dispatch<React.SetStateAction<IFile | null>>;
  onFolderUpdate: (folders: IFolder[], currentFolder: IGalleryFolder) => void;
  setAddEditFolder: React.Dispatch<React.SetStateAction<IGalleryFolder | null>>;
  setFolderMap: React.Dispatch<React.SetStateAction<Record<string, IGalleryFolder>>>;
}

export interface IUseGallery {
  currentFolder: string;
  folderMap: Record<string, IGalleryFolder>;
  onFolderSelect: IGenericParam<IGalleryFolder>;
  onFolderUpdate: (folder: IFolder[], currentFolder: IGalleryFolder) => void;
  setFolderMap: React.Dispatch<React.SetStateAction<Record<string, IGalleryFolder>>>;
}

export interface IUseCommonGalleryContext extends IFileUploadExternal {
  currentFolder: string;
  deleteConfirm: boolean;
  selectedFile: IFile | null;
  uploadFiles: IGenericMethod;
  onFolderAdd: IGenericMethod;
  onFolderDelete: IGenericMethod;
  addEditFolder: IGalleryFolder | null;
  onFolderDeleteConfirm: IGenericMethod;
  closeShowUploadFolder: IGenericMethod;
  openShowUploadFolder: IGenericMethod;
  onDeleteConfirmCancel: IGenericMethod;
  toggleShowUploadFolder: IGenericMethod;
  onSelectedFolderCancel: IGenericMethod;
  folderMap: Record<string, IGalleryFolder>;
  onFolderSelect: IGenericParam<IGalleryFolder>;
  onAddFolderSave: IGenericReturn<Promise<unknown>>;
  onSelectedFolderLabelUpdate: IGenericParam<string>;
  setSelectedFile: React.Dispatch<React.SetStateAction<IFile | null>>;
  setAddEditFolder: React.Dispatch<React.SetStateAction<IGalleryFolder | null>>;
  onFileDelete: IGenericMethod;
  onConvertFile: OnConvertFileType;
  onFolderToggle: IGenericParam<IGalleryFolder>;
  onFileToggle: IGenericParam<IGalleryFolder>;
}
