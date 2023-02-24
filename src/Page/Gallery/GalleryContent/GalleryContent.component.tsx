import {
  GalleryContentRoot,
  GalleryContentFiles,
  GalleryContentExtra,
} from './GalleryContent.style';
import { AddEditFolder } from '../AddEditFolder';
import { useCommonGallery } from '../Gallery.service';
import { GalleryFolder } from '../GalleryFolder';
import { UploadFiles } from '../UploadFiles';

export const GalleryContent: React.FC = () => {
  const { folderMap, currentFolder, addEditFolder, showFileUploader } = useCommonGallery();
  return (
    <GalleryContentRoot>
      <GalleryContentFiles>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {folderMap[currentFolder].folders.map((value) => {
            return <GalleryFolder key={value} folder={folderMap[value]} />;
          })}
        </div>
      </GalleryContentFiles>
      <GalleryContentExtra>
        {addEditFolder && <AddEditFolder />}
        {showFileUploader && <UploadFiles />}
      </GalleryContentExtra>
    </GalleryContentRoot>
  );
};
