import { ENV } from '@constant';
import Button from '@mui/material/Button';

import { useCommonGallery } from '../Gallery.service';

export const SelectedFile: React.FC = () => {
  const { selectedFile, onFileDelete, setSelectedFile } = useCommonGallery();
  if (selectedFile) {
    return (
      <div>
        <div>{selectedFile.id}</div>
        <div>
          <img
            src={`${ENV.S3_BUCKET}/${selectedFile.path}`}
            alt={selectedFile.name}
            width={'175px'}
          />
          {selectedFile.name}
        </div>
        <div>
          <Button variant="contained" onClick={onFileDelete}>
            Delete
          </Button>
          <Button variant="contained" onClick={() => setSelectedFile(null)}>
            Cancel
          </Button>
        </div>
      </div>
    );
  }
  return null;
};
