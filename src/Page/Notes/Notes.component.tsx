import React from 'react';

import { Confirm } from '@common';

import { NoteDetail, NoteDetailLoading } from './NoteDetail';
import { NoteHeader, NoteHeaderLoading } from './NoteHeader';
import { NoteList, NodeListLoading } from './NoteList';
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
    return (
      <NotesRoot>
        <NoteHeaderLoading />
        <NodeListLoading />
        <NoteDetailLoading />
      </NotesRoot>
    );
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
        onNoteCancel={onNoteCancel}
        saveNote={saveNote}
        onDeleteConfirm={onDeleteConfirm}
      />
      <NoteList notes={notes} onNoteSelect={onNoteSelect} />
      <NoteDetail mode={mode} selectedNote={selectedNote} updateNote={updateNote} />
    </NotesRoot>
  );
};
