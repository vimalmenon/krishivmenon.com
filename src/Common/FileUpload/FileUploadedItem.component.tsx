import { Icon } from '@common';
import ChangeCircleRoundedIcon from '@mui/icons-material/ChangeCircleRounded';
import Skeleton from '@mui/material/Skeleton';
import { Container } from '@style';

import { IFileUploadedItem } from './FileUpload';

export const FileUploadedItem: React.FC<IFileUploadedItem> = ({
  file,
  onDelete,
  onConvertFile,
  index,
}) => {
  return (
    <Container component="div" sx={{ position: 'relative', gap: 1 }}>
      {file.loading && (
        <Skeleton
          variant="rectangular"
          width={'100%'}
          height={'100%'}
          sx={{ position: 'absolute' }}
        />
      )}
      <Container component="div" sx={{ flex: '0' }}>
        <img
          src={URL.createObjectURL(file.file)}
          alt={file.file.name}
          style={{
            height: '60px',
            width: '40px',
          }}
          onLoad={() => {
            URL.createObjectURL(file.file);
          }}
        />
      </Container>
      <Container component="div" sx={{ flex: '1' }}>
        {file.label}
      </Container>
      <Container component="div" sx={{ flex: '0' }}>
        <Icon Icon={Icon.icons.Delete} label="Delete" onClick={onDelete} />
        <ChangeCircleRoundedIcon onClick={() => onConvertFile(file, index)} />
      </Container>
    </Container>
  );
};
