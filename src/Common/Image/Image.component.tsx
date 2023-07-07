import React from 'react';

import Skeleton from '@mui/material/Skeleton';

import { Container } from '@style';

import { IImage } from './Image';

export const Image: React.FC<IImage> = ({ src, alt }) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    setLoading(true);
  }, [src]);
  return (
    <Container component={'div'} direction="column" sx={{ minHeight: '350px', flex: 1 }}>
      {loading && (
        <Skeleton variant="rectangular" height="350px" sx={{ flex: 1, display: 'flex' }} />
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
    </Container>
  );
};
