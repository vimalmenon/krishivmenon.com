import { IGalleryFolder } from './GalleryFolder';
import { useGalleryFolder } from './GalleryFolder.hook';
import { FolderStyle } from './GalleryFolder.style';

export const GalleryFolder: React.FC<IGalleryFolder> = ({ folder }) => {
  const { onFolderClick } = useGalleryFolder(folder);
  return <FolderStyle onClick={onFolderClick}>{folder.label}</FolderStyle>;
};
