import { IVideo } from './Video';

export const Video: React.FC<IVideo> = ({ src }) => {
  return (
    <video controls style={{ width: '100%' }} preload="auto">
      <source src={src}></source>
      <track kind="captions" />
    </video>
  );
};
