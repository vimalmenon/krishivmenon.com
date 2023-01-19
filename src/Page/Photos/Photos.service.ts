import React from 'react';

import { getBaseUrl } from '@utility';
const url = getBaseUrl();

export const usePhotos = () => {
  React.useEffect(() => {
    fetch(`${url}`)
      .then((value) => {
        return value.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  const savePhoto = (file: any) => {
    console.log(file);
    // fetch(`${url}/upload/work/something2.png`, {
    //   body: file,
    //   method: 'PUT',
    // })
    //   .then(() => {
    //     console.log('this is called');
    //   })
    //   .catch(() => {
    //     console.log('this is catch');
    //   });
  };
  return {
    savePhoto,
  };
};
