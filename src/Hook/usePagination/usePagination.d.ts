export interface IUsePaginationParams {
  fileLength: number;
  pageSize: number;
}

export interface IUsePagination {
  page: number;
  pageEnd: number;
  pageStart: number;
  paginationCount: number;
  hasPagination: boolean;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}
