import React from 'react';

import dynamic from 'next/dynamic';

import { Container } from '@style';

import { IEditor } from './Editor';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export const Editor: React.FC<IEditor> = ({ note, setNote, mode }) => {
  if (mode === 'VIEW') {
    return (
      <Container component="section">
        <div dangerouslySetInnerHTML={{ __html: note }}></div>
      </Container>
    );
  }
  return (
    <ReactQuill
      theme="snow"
      value={note}
      onChange={setNote}
      style={{ width: '100%', height: '90%' }}
    />
  );
};
