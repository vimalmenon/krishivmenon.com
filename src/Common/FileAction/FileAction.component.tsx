import React from 'react';

import TextField from '@mui/material/TextField';

import { Icon, FileViewer } from '@common';
import { Container } from '@style';
import { IGenericMethod } from '@types';

import { IFileAction } from './FileAction';

export const FileAction: React.FC<IFileAction> = ({
  file,
  width,
  height,
  onViewFile,
  onFileEditSave,
  onFileMoveRequest,
  onFileDeleteRequest,
}) => {
  const [isEdit, setIsEdit] = React.useState<boolean>(false);
  const [label, setLabel] = React.useState<string>(file.label);
  const onCancel: IGenericMethod = () => {
    setIsEdit(!isEdit);
    setLabel(file.label);
  };
  const onSave = async (): Promise<void> => {
    await onFileEditSave({ ...file, label });
    setIsEdit(!isEdit);
    setLabel(file.label);
  };
  return (
    <Container component={'div'} direction="column" sx={{ flex: '1 1 100%' }}>
      <Container
        component={'div'}
        sx={{ justifyContent: 'space-between', flex: '0 0 40px', my: 1, minWidth: '300px' }}
      >
        {isEdit ? (
          <TextField
            value={label}
            size="small"
            label="Name"
            fullWidth
            onChange={(e) => setLabel(e.target.value)}
          />
        ) : (
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>{file.label}</span>
        )}
      </Container>
      <Container
        component={'div'}
        sx={{ flex: '1 1 100%', justifyContent: 'center', alignItems: 'center' }}
      >
        <FileViewer file={file} width={width} height={height} />
      </Container>
      <Container component={'div'} sx={{ justifyContent: 'space-between', flex: '0 0 40px' }}>
        {isEdit ? (
          <>
            <Icon Icon={Icon.icons.Save} label="Save" onClick={onSave} />
            <Icon Icon={Icon.icons.Cancel} label="Cancel" onClick={onCancel} />
          </>
        ) : (
          <>
            <Icon Icon={Icon.icons.Move} onClick={() => onFileMoveRequest(file)} label="Move" />
            <Icon Icon={Icon.icons.OpenInFull} onClick={() => onViewFile(file)} label="Move" />
            <Icon Icon={Icon.icons.Edit} label="Edit" onClick={() => setIsEdit(!isEdit)} />
            <Icon Icon={Icon.icons.Delete} onClick={() => onFileDeleteRequest(file)} label="Move" />
          </>
        )}
      </Container>
    </Container>
  );
};
