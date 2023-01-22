import React from 'react';

import dynamic from 'next/dynamic';

import 'react-quill/dist/quill.snow.css';
import { IEditor } from './Editor';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export const Editor: React.FC<IEditor> = ({ note, setNote }) => {
  return (
    <ReactQuill
      theme="snow"
      value={note}
      onChange={setNote}
      style={{ width: '100%', height: '50vh' }}
    />
  );
};
