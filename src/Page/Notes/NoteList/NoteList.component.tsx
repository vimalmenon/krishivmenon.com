import { Icon } from '@common';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { Container } from '@style';

import { NoteListRoot } from './NoteList.style';
import { INoteListPage } from './Notes';

export const NoteList: React.FC<INoteListPage> = ({ notes, onNoteSelect, onDeleteConfirm }) => {
  return (
    <NoteListRoot>
      <Container component="div">
        <TextField label="Search" variant="standard" size="small" fullWidth name="search" />
      </Container>
      <Divider />
      <Container component="div" direction="column">
        {notes.map((note) => {
          return (
            <Card sx={{ display: 'flex' }} key={note.id} onClick={() => onNoteSelect(note)}>
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between', flex: '1' }}>
                {note.title} <Icon.icons.Delete onClick={() => onDeleteConfirm(note)} />
              </CardContent>
            </Card>
          );
        })}
      </Container>
    </NoteListRoot>
  );
};
