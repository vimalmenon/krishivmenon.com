import React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

import { Icon, PromiseLoadingButton, Dialog } from '@common';
import { Container } from '@style';
import { IGenericMethod, IGenericParam, IGenericReturn } from '@types';

import { useFolderHelper } from '../../Gallery.service';

export const AddEditFolder: React.FC = () => {
  const { onFolderAddEditCancel, onFolderAddEditSave, folder, addEditFolder } = useFolderHelper();
  const [label, setLabel] = React.useState<string>('');
  const [context, setContext] = React.useState<string>('');
  const [date, setDate] = React.useState<string | null | undefined>();

  const updateInput: IGenericParam<React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>> = (
    e
  ) => {
    setLabel(e.target.value);
  };
  const onCancel: IGenericMethod = () => {
    onFolderAddEditCancel();
    setLabel('');
    setContext('');
    setDate(undefined);
  };
  const onDataChange: IGenericParam<Dayjs | null> = (value) => {
    setDate(value?.toString() || null);
  };
  const onSave: IGenericReturn<Promise<void>> = async () => {
    await onFolderAddEditSave({
      label,
      context,
      date,
    });
    setLabel('');
    setContext('');
  };
  const onShowDate: IGenericMethod = () => {
    setDate(null);
  };
  const onRemoveDate: IGenericMethod = () => {
    setDate(undefined);
  };
  React.useEffect(() => {
    if (folder) {
      setLabel(folder.label);
      setContext(folder.metadata?.context || '');
      setDate(folder.metadata?.date ? folder.metadata?.date : undefined);
    }
  }, [folder]);
  return (
    <Dialog
      open={addEditFolder !== 'VIEW'}
      title={addEditFolder === 'ADD' ? 'Add Folder' : 'Edit Folder'}
    >
      <Dialog.Body>
        <Container component="div" sx={{ m: 2, gap: 2 }} direction="column">
          <TextField
            value={label}
            onChange={updateInput}
            label="Folder name"
            fullWidth
            size="small"
          />
          <TextField
            label="Context"
            placeholder="Context"
            multiline
            rows={3}
            value={context}
            onChange={(e) => setContext(e.target.value)}
          />
          {date === undefined ? (
            <Container component="div" sx={{ justifyContent: 'end' }}>
              <Icon Icon={Icon.icons.Add} label="Add Date" onClick={onShowDate} />
            </Container>
          ) : null}
          {date !== undefined ? (
            <Container component="div">
              <Container component="div" sx={{ flex: 1 }}>
                <DatePicker
                  label="Date"
                  value={date ? dayjs(date) : null}
                  views={['year', 'month', 'day']}
                  openTo="month"
                  onChange={(newValue) => onDataChange(newValue)}
                  sx={{ width: '100%' }}
                />
              </Container>
              <div>
                <Icon Icon={Icon.icons.Delete} label="Remove Date" onClick={onRemoveDate} />
              </div>
            </Container>
          ) : null}
        </Container>
      </Dialog.Body>
      <Dialog.Footer>
        <PromiseLoadingButton variant="contained" onClick={onSave} startIcon={<Icon.icons.Save />}>
          <span>{folder?.id ? 'Update' : 'Create'}</span>
        </PromiseLoadingButton>
        <Button variant="outlined" onClick={onCancel} startIcon={<Icon.icons.Cancel />}>
          Cancel
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};
