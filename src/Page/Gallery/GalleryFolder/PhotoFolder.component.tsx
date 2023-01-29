import { useGalleryFolder } from './GalleryFolder.hook';
import { FolderStyle } from './GalleryFolder.style';
import { IPhotoFolder } from './PhotoFolder';

export const PhotoFolder: React.FC<IPhotoFolder> = ({ folder }) => {
  const { onFolderClick } = useGalleryFolder(folder);
  return <FolderStyle onClick={onFolderClick}>{folder.label}</FolderStyle>;
};
