import React from 'react';

import Tooltip from '@mui/material/Tooltip';

import { Icon, FileViewer } from '@common';
import { Container } from '@style';

import { IFileAction } from './FileAction';

export const FileAction: React.FC<IFileAction> = ({
  file,
  width,
  height,
  onFileEdit,
  onViewFile,
  onFileConvert,
  onFileMoveRequest,
  onFileDeleteRequest,
}) => {
  return (
    <Container component={'div'} direction="column" sx={{ flex: '1 1 100%' }}>
      <Container
        component={'div'}
        sx={{
          justifyContent: 'space-between',
          flex: '0 0 40px',
          my: 1,
          minWidth: '300px',
          alignItems: 'center',
        }}
      >
        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>{file.label}</span>
        {file.metadata?.context ? (
          <Tooltip title={file.metadata?.context}>
            <Icon.icons.Info />
          </Tooltip>
        ) : null}
      </Container>
      <Container
        component={'div'}
        sx={{ flex: '1 1 100%', justifyContent: 'center', alignItems: 'center' }}
      >
        <FileViewer file={file} width={width} height={height} />
      </Container>
      <Container component={'div'} sx={{ justifyContent: 'space-between', flex: '0 0 40px' }}>
        {file.type === 'image/heic' ? (
          <Icon Icon={Icon.icons.Process} label="Convert" onClick={() => onFileConvert(file)} />
        ) : null}
        <Icon Icon={Icon.icons.Move} onClick={() => onFileMoveRequest(file)} label="Move" />
        <Icon Icon={Icon.icons.OpenInFull} onClick={() => onViewFile(file)} label="Move" />
        <Icon Icon={Icon.icons.Edit} label="Edit" onClick={onFileEdit} />
        <Icon Icon={Icon.icons.Delete} onClick={() => onFileDeleteRequest(file)} label="Move" />
      </Container>
    </Container>
  );
};
