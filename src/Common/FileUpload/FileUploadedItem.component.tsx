import { Icon } from '@common';
import { Container } from '@style';

import { IFileUploadedItem } from './FileUpload';

export const FileUploadedItem: React.FC<IFileUploadedItem> = ({ file, onDelete }) => {
  return (
    <Container component="div">
      <div>
        <img
          src={URL.createObjectURL(file.file)}
          style={{
            height: '60px',
            width: '40px',
          }}
          onLoad={() => {
            URL.createObjectURL(file.file);
          }}
        />
      </div>
      <div>{file.label}</div>
      <div>
        <Icon Icon={Icon.icons.Delete} label="Delete" onClick={onDelete} />
      </div>
    </Container>
  );
};
