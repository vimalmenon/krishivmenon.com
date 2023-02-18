import React from 'react';

import { Confirm } from '@common';

import { NoteDetail } from './NoteDetail';
import { NoteHeader } from './NoteHeader';
import { NoteList } from './NoteList';
import { useNotes } from './Notes.service';
import { NotesRoot } from './Notes.style';

export const Notes: React.FC = () => {
  const {
    mode,
    notes,
    loading,
    saveNote,
    deleteNote,
    createNote,
    updateNote,
    onNoteEdit,
    selectedNote,
    onNoteSelect,
    onNoteCancel,
    confirmDelete,
    onDeleteCancel,
    onDeleteConfirm,
  } = useNotes();
  if (loading) {
    return <div>...loading</div>;
  }
  return (
    <NotesRoot>
      <Confirm open={!!confirmDelete} handleClose={onDeleteCancel} handleConfirm={deleteNote}>
        <>Are you sure you want to delete {selectedNote?.title}</>
      </Confirm>
      <NoteHeader
        mode={mode}
        selectedNote={selectedNote}
        createNote={createNote}
        onNoteEdit={onNoteEdit}
        updateNote={updateNote}
        onNoteCancel={onNoteCancel}
        saveNote={saveNote}
        onDeleteConfirm={onDeleteConfirm}
      />
      <NoteList notes={notes} onNoteSelect={onNoteSelect} />
      <NoteDetail mode={mode} selectedNote={selectedNote} updateNote={updateNote} />
    </NotesRoot>
  );
};
