import { IFolder, IGenericMethod, IGenericParam, IGalleryFolder, IFile } from '@types';
import { IFileUploadExternal } from 'src/Common/FileUpload/FileUpload';

export type OnConvertFileType = (file: IUploadedFile, index: number) => Promise<unknown>;

export interface IGalleryContext extends IFileUploadExternal {
  currentFolder: string;
  deleteConfirm: boolean;
  clearFiles: IGenericMethod;
  onConvertFile: OnConvertFileType;
  selectedItem: IGalleryFolder | IFile | null;
  folderMap: Record<string, IGalleryFolder>;
  onFolderSelect: IGenericParam<IGalleryFolder>;
  setDeleteConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  onFolderUpdate: (folders: IFolder[], currentFolder: IGalleryFolder) => void;
  setFolderMap: React.Dispatch<React.SetStateAction<Record<string, IGalleryFolder>>>;
  setSelectedItem: React.Dispatch<React.SetStateAction<IGalleryFolder | IFile | null>>;
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
  uploadFiles: IGenericMethod;
  onFolderAdd: IGenericMethod;
  onFileDelete: IGenericMethod;
  onFolderDelete: IGenericMethod;
  onConvertFile: OnConvertFileType;
  onFolderDeleteConfirm: IGenericMethod;
  closeShowUploadFolder: IGenericMethod;
  openShowUploadFolder: IGenericMethod;
  onDeleteConfirmCancel: IGenericMethod;
  toggleShowUploadFolder: IGenericMethod;
  onSelectedFolderCancel: IGenericMethod;
  folderMap: Record<string, IGalleryFolder>;
  onFileToggle: IGenericParam<IGalleryFolder>;
  selectedItem: IGalleryFolder | IFile | null;
  onFolderSelect: IGenericParam<IGalleryFolder>;
  onFolderToggle: IGenericParam<IGalleryFolder>;
  onAddFolderSave: IGenericReturn<Promise<unknown>>;
  onSelectedFolderLabelUpdate: IGenericParam<string>;
  setSelectedItem: React.Dispatch<React.SetStateAction<IGalleryFolder | IFile | null>>;
}
