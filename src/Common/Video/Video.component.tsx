import { IVideo } from './Video';

export const Video: React.FC<IVideo> = ({ height, width, src }) => {
  return (
    <video width={height} height={width} controls>
      <source src={src} type="video/mp4"></source>
      <track kind="captions" />
    </video>
  );
};
