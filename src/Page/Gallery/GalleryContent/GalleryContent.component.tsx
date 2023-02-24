import { Container, Spacing } from '@style';

import { GalleryContentRoot } from './GalleryContent.style';
import { AddEditFolder } from '../AddEditFolder';
import { useCommonGallery } from '../Gallery.service';
import { GalleryFolder } from '../GalleryFolder';
import { UploadFiles } from '../UploadFiles';

export const GalleryContent: React.FC = () => {
  const { folderMap, currentFolder, addEditFolder, showFileUploader } = useCommonGallery();
  return (
    <GalleryContentRoot>
      <Container component={'div'} direction="column" sx={{ gap: Spacing.md, flex: '1 1 100%' }}>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {folderMap[currentFolder].folders.map((value) => {
            return <GalleryFolder key={value} folder={folderMap[value]} />;
          })}
        </div>
      </Container>
      <Container component={'section'} sx={{ flex: '1 1 100%' }}>
        {addEditFolder && <AddEditFolder />}
        {showFileUploader && <UploadFiles />}
      </Container>
    </GalleryContentRoot>
  );
};
