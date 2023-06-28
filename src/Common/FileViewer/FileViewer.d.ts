import { IFile, IGenericParam } from '@types';

export interface IFileViewer {
  file: IFile;
  onFileMoveRequest: IGenericParam<IFile>;
  onFileDeleteRequest: IGenericParam<IFile>;
  height?: number;
  width?: number;
}
