import { IFolder, IGenericMethod, IGenericParam, IGalleryFolder, IFile } from '@types';
import { IFileUploadExternal } from 'src/Common/FileUpload/FileUpload';

export type OnConvertFileType = (file: IUploadedFile, index: number) => Promise<unknown>;

export interface IGalleryContext extends IFileUploadExternal {
  currentFolder: string;
  deleteConfirm: boolean;
  clearFiles: IGenericMethod;
  selectedFile: IFile | null;
  onConvertFile: OnConvertFileType;
  selectedItem: IGalleryFolder | IFile | null;
  folderMap: Record<string, IGalleryFolder>;
  onFolderSelect: IGenericParam<IGalleryFolder>;
  setDeleteConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedFile: React.Dispatch<React.SetStateAction<IFile | null>>;
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
  selectedFile: IFile | null;
  uploadFiles: IGenericMethod;
  onFolderAdd: IGenericMethod;
  onFileDelete: IGenericMethod;
  onFolderDelete: IGenericMethod;
  onFolderDeleteConfirm: IGenericMethod;
  closeShowUploadFolder: IGenericMethod;
  openShowUploadFolder: IGenericMethod;
  onDeleteConfirmCancel: IGenericMethod;
  toggleShowUploadFolder: IGenericMethod;
  onSelectedFolderCancel: IGenericMethod;
  folderMap: Record<string, IGalleryFolder>;
  selectedItem: IGalleryFolder | IFile | null;
  onFolderSelect: IGenericParam<IGalleryFolder>;
  onAddFolderSave: IGenericReturn<Promise<unknown>>;
  onSelectedFolderLabelUpdate: IGenericParam<string>;
  setSelectedFile: React.Dispatch<React.SetStateAction<IFile | null>>;
  setSelectedItem: React.Dispatch<React.SetStateAction<IGalleryFolder | IFile | null>>;
  onConvertFile: OnConvertFileType;
  onFolderToggle: IGenericParam<IGalleryFolder>;
  onFileToggle: IGenericParam<IGalleryFolder>;
}
