import { DropEvent, FileRejection } from 'react-dropzone';

export interface IFileUpload {
  accept: Record<string, string[]>;
  onDropAccepted: (files: File[], event: DropEvent) => void;
  onDropRejected?: (fileRejections: FileRejection[], event: DropEvent) => void;
}
