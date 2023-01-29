import { IFolder } from '@types';

export interface IGalleryContext {
  loading: boolean;
  folders: IFolder[];
  setFolders: React.Dispatch<React.SetStateAction<IFolder[]>>;
  selectedFolder: IFolder | null;
  setSelectedFolder: React.Dispatch<React.SetStateAction<IFolder | null>>;
}

export interface IGalleryFolder extends IFolder {
  folders: IGalleryFolder[];
  breadcrumbs: IGalleryFolder[];
}
