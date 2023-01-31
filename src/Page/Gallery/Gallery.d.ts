import { IFolder, IGenericParam } from '@types';

export interface IGalleryFolder extends IFolder {
  breadcrumbs: string[];
  folders: string[];
  loading: boolean;
}

export interface IGalleryContext {
  loading: boolean;
  currentFolder: string;
  folderMap: Record<string, IGalleryFolder>;
  selectedFolder: IFolder | null;
  onFolderSelect: IGenericParam<IGalleryFolder>;
  setSelectedFolder: React.Dispatch<React.SetStateAction<IFolder | null>>;
  onFolderUpdate: (folders: IFolder[], currentFolder: IGalleryFolder) => void;
}
