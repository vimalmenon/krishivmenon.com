import { IFolder, IGenericParam } from '@types';

export interface IGalleryFolder extends IFolder {
  folders: IGalleryFolder[];
  index: number[];
  loading: boolean;
}

export interface IGalleryContext {
  loading: boolean;
  folder: IGalleryFolder;
  currentFolder: string;
  index: number[];
  selectedFolder: IFolder | null;
  onFolderSelect: IGenericParam<IGalleryFolder>;
  setSelectedFolder: React.Dispatch<React.SetStateAction<IFolder | null>>;
}
