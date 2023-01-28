import { IGenericMethod, IGenericParam } from '@types';

export interface IFolder {
  name: string;
  edit: boolean;
  onNameChange: IGenericParam<string>;
  onSave: IGenericMethod;
  onCancel: IGenericMethod;
  onDelete: IGenericMethod;
}
