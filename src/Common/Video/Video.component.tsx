import { Icon } from '@common';
import { Container } from '@style';

import { IVideo } from './Video';

export const Video: React.FC<IVideo> = ({ height, width, src }) => {
  return (
    <Container component={'div'} direction="column">
      <Container component={'div'}>
        <video width={height} height={width} controls>
          <source src={src} type="video/mp4"></source>
          <track kind="captions" />
        </video>
      </Container>
      <Container component={'div'}>
        <Icon.icons.Move />
      </Container>
    </Container>
  );
};
