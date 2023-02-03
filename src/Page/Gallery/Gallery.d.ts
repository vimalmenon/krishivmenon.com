import { IFolder, IGenericMethod, IGenericParam } from '@types';

export interface IGalleryFolder extends IFolder {
  breadcrumbs: string[];
  folders: string[];
  loading: boolean;
}

export interface IGalleryContext {
  loading: boolean;
  currentFolder: string;
  folderMap: Record<string, IGalleryFolder>;
  addEditFolder: IFolder | null;
  onFolderSelect: IGenericParam<IGalleryFolder>;
  setAddEditFolder: React.Dispatch<React.SetStateAction<IFolder | null>>;
  onFolderUpdate: (folders: IFolder[], currentFolder: IGalleryFolder) => void;
  deleteConfirm: boolean;
  setDeleteConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  showUploadFolder: boolean;
  setShowUploadFolder: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IUseGallery {
  loading: boolean;
  folderMap: Record<string, IGalleryFolder>;
  currentFolder: string;
  onFolderSelect: IGenericParam<IGalleryFolder>;
  onFolderUpdate: (folder: IFolder[], currentFolder: IGalleryFolder) => void;
}

export interface IUseCommonGalleryContext {
  loading: boolean;
  addEditFolder: IFolder | null;
  folderMap: Record<string, IGalleryFolder>;
  onFolderAdd: IGenericMethod;
  onSelectedFolderCancel: IGenericMethod;
  currentFolder: string;
  onFolderDelete: IGenericReturn<Promise<unknown>>;
  onAddFolderSave: IGenericReturn<Promise<unknown>>;
  setAddEditFolder: React.Dispatch<React.SetStateAction<IFolder | null>>;
  onFolderSelect: IGenericParam<IGalleryFolder>;
  onSelectedFolderLabelUpdate: IGenericParam<string>;
  onFolderDeleteConfirm: IGenericMethod;
  deleteConfirm: boolean;
}
