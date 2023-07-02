import { IVideo } from './Video';

export const Video: React.FC<IVideo> = ({ src }) => {
  return (
    <video controls style={{ width: '100%' }}>
      <source src={src} type="video/mp4"></source>
      <track kind="captions" />
    </video>
  );
};
