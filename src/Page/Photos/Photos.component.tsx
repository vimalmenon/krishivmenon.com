import { FileUpload } from '@common';

export const Photos: React.FC = () => {
  return (
    <div>
      <FileUpload fileType="image" />
      <div></div>
    </div>
  );
};
