import TextField from '@mui/material/TextField';

import { Icon, FileViewer } from '@common';
import { Container } from '@style';

import { IFileAction } from './FileAction';

export const FileAction: React.FC<IFileAction> = ({
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
        <FileViewer file={file} width={width} height={height} />
      </Container>
      <Container component={'div'} sx={{ justifyContent: 'space-between', flex: '0 0 40px' }}>
        <Icon Icon={Icon.icons.Move} onClick={() => onFileMoveRequest(file)} label="Move" />
        <Icon Icon={Icon.icons.OpenInFull} onClick={() => onViewFile(file)} label="Move" />
        <Icon Icon={Icon.icons.Delete} onClick={() => onFileDeleteRequest(file)} label="Move" />
      </Container>
    </Container>
  );
};
