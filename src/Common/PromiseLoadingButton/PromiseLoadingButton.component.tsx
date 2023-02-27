import React from 'react';

import LoadingButton from '@mui/lab/LoadingButton';
import { IGenericMethod } from '@types';

export const PromiseLoadingButton: typeof LoadingButton = ({ ...props }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const onPromiseClick: IGenericMethod = async () => {
    setLoading(true);
    await props.onClick();
    setLoading(false);
  };
  return (
    <LoadingButton
      {...props}
      loading={loading}
      onClick={onPromiseClick}
      loadingPosition={props.loadingPosition || 'start'}
    />
  );
};
