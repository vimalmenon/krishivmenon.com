import { GalleryFolder } from './GalleryFolder';
import { useFolderHelper } from '../../Gallery.service';
import { GalleryContentFolderStyle } from '../GalleryContent.style';

export const GalleryContentFolders: React.FC = () => {
  const { currentFolder, folderMap, selectedFolder } = useFolderHelper();
  return (
    <GalleryContentFolderStyle>
      {currentFolder.folders.map((value) => {
        return (
          <GalleryFolder
            key={value}
            folder={folderMap[value]}
            isSelected={selectedFolder?.id === value}
          />
        );
      })}
    </GalleryContentFolderStyle>
  );
};
