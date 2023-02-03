import { FileUpload } from '@common';
import Button from '@mui/material/Button';
import { Container } from '@style';

import { PaperStyle } from './UploadFiles.style';
import { useCommonGallery } from '../Gallery.service';

export const UploadFiles: React.FC = () => {
  const { toggleShowUploadFolder } = useCommonGallery();
  return (
    <PaperStyle>
      <Container component={'div'} sx={{ flex: '1' }}>
        <FileUpload fileType={'image'} />
      </Container>
      <Container component={'div'} sx={{ justifyContent: 'space-between' }}>
        <Button variant="contained">Save</Button>
        <Button variant="contained" onClick={toggleShowUploadFolder}>
          Cancel
        </Button>
      </Container>
    </PaperStyle>
  );
};
