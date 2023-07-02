import React from 'react';

import Skeleton from '@mui/material/Skeleton';

import { IImage } from './Image';

export const Image: React.FC<IImage> = ({ src, height, width, alt }) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    setLoading(true);
  }, [src]);
  return (
    <div>
      {loading && (
        <Skeleton variant="rectangular" width={width || '100%'} height={height || '350px'} />
      )}
      <img
        src={src}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
        alt={alt}
        style={{
          maxWidth: '100%',
          display: loading ? 'none' : 'block',
        }}
      />
    </div>
  );
};
