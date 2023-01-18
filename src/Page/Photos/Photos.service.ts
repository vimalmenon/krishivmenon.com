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
    // fetch(' https://p1nqtdgh09.execute-api.us-east-1.amazonaws.com/test/image', {
    //     body: file,
    //     method: "POST",
    // }).then(() => {
    //     console.log("this is called")
    // }).catch(() => {
    //     console.log("this is catch")
    // });
  };
  return {
    savePhoto,
  };
};
