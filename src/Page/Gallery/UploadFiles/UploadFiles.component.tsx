import { FileUpload, useFileUpload } from '@common';
import { AcceptVideo, AcceptImages } from '@constant';
import Button from '@mui/material/Button';
import { Container } from '@style';

import { PaperStyle } from './UploadFiles.style';
import { useCommonGallery } from '../Gallery.service';

export const UploadFiles: React.FC = () => {
  const { toggleShowUploadFolder } = useCommonGallery();
  const { onDropAccepted, onDropRejected, files, onDeleteFile } = useFileUpload();
  return (
    <PaperStyle>
      <Container component={'div'} sx={{ flex: '1' }}>
        <FileUpload
          files={files}
          accept={{ ...AcceptImages, ...AcceptVideo }}
          onDropAccepted={onDropAccepted}
          onDropRejected={onDropRejected}
          onDeleteFile={onDeleteFile}
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
