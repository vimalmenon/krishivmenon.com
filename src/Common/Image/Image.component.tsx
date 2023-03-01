import React from 'react';

import Skeleton from '@mui/material/Skeleton';
import Imgix from 'react-imgix';

import { IImage } from './Image';

export const Image: React.FC<IImage> = ({ src, height, width }) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const style = loading ? { display: 'none' } : {};
  return (
    <div>
      {loading && (
        <Skeleton variant="rectangular" width={width || '100%'} height={height || '350px'} />
      )}
      <Imgix
        src={src}
        width={width}
        height={height}
        htmlAttributes={{
          onLoad: () => {
            setLoading(false);
          },
          style,
        }}
      />
    </div>
  );
};
