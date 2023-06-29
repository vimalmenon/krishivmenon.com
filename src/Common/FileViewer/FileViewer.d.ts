import { IFile, IGenericParam } from '@types';

export interface IFileViewer {
  file: IFile;
  height?: number;
  width?: number;
  onViewFile: IGenericParam<IFile>;
  onFileMoveRequest: IGenericParam<IFile>;
  onFileDeleteRequest: IGenericParam<IFile>;
}
