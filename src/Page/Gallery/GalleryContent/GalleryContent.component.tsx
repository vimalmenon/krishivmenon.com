import { Container, Spacing } from '@style';

import { GalleryContentRoot } from './GalleryContent.style';
import { useCommonGallery } from '../Gallery.service';
import { GalleryFolder } from '../GalleryFolder';

export const GalleryContent: React.FC = () => {
  const { folderMap, currentFolder } = useCommonGallery();
  return (
    <GalleryContentRoot>
      <Container component={'div'} direction="column" sx={{ gap: Spacing.md, flex: '1 1 100%' }}>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {folderMap[currentFolder].folders.map((value) => {
            return <GalleryFolder key={value} folder={folderMap[value]} />;
          })}
        </div>
      </Container>
    </GalleryContentRoot>
  );
};
