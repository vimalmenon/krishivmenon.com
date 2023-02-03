import { FileUpload } from '@common';
import { AcceptVideo, AcceptImages } from '@constant';
import Button from '@mui/material/Button';
import { Container } from '@style';
import { DropEvent } from 'react-dropzone';

import { PaperStyle } from './UploadFiles.style';
import { useCommonGallery } from '../Gallery.service';

export const UploadFiles: React.FC = () => {
  const { toggleShowUploadFolder } = useCommonGallery();
  return (
    <PaperStyle>
      <Container component={'div'} sx={{ flex: '1' }}>
        <FileUpload
          accept={{ ...AcceptImages, ...AcceptVideo }}
          onDropAccepted={function (files: File[], event: DropEvent): void {
            throw new Error('Function not implemented.');
          }}
        />
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
