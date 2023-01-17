import React from 'react';

import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export const Editor: React.FC = () => {
  const [value, setValue] = React.useState('');

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
};
