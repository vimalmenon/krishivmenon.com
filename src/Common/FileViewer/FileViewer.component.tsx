import TextField from '@mui/material/TextField';

import { Icon, Image, Video } from '@common';
import { Container } from '@style';
import { getS3BucketFullPath } from '@utility';

import { IFileViewer } from './FileViewer';

export const FileViewer: React.FC<IFileViewer> = ({
  file,
  width,
  height,
  onViewFile,
  onFileMoveRequest,
  onFileDeleteRequest,
}) => {
  return (
    <Container component={'div'} direction="column" sx={{ flex: '1 1 100%' }}>
      <Container
        component={'div'}
        sx={{ justifyContent: 'space-between', flex: '0 0 40px', my: 1 }}
      >
        <TextField value={file.label} size="small" label="Name" fullWidth />
        <Icon Icon={Icon.icons.Edit} label="Edit" />
      </Container>
      <Container
        component={'div'}
        sx={{ flex: '1 1 100%', justifyContent: 'center', alignItems: 'center' }}
      >
        {file.type === 'image/jpeg' ? (
          <Image
            src={getS3BucketFullPath(file.path)}
            height={height}
            width={width}
            alt={file.label}
          />
        ) : null}
        {file.type === 'video/mp4' ? (
          <Video src={getS3BucketFullPath(file.path)} height={height} width={width} />
        ) : null}
      </Container>
      <Container component={'div'} sx={{ justifyContent: 'space-between', flex: '0 0 40px' }}>
        <Icon Icon={Icon.icons.Move} onClick={() => onFileMoveRequest(file)} label="Move" />
        <Icon Icon={Icon.icons.OpenInFull} onClick={() => onViewFile(file)} label="Move" />
        <Icon Icon={Icon.icons.Delete} onClick={() => onFileDeleteRequest(file)} label="Move" />
      </Container>
    </Container>
  );
};
