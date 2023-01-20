export interface IItem {
  file: File;
  uid: string;
}

export type IUseItem = (
  file: File,
  uid: string
) => {
  loading: boolean;
  isDeleted: boolean;
  extension: string;
};
