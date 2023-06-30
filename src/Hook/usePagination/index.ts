import React from 'react';

import { IGeneric } from '@types';

import { IUsePaginationParams, IUsePagination } from './usePagination';

export const usePagination: IGeneric<IUsePaginationParams, IUsePagination> = ({
  pageSize,
  fileLength,
}) => {
  const [page, setPage] = React.useState<number>(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    setPage(value);
  };
  return {
    page,
    handleChange,
    paginationCount: Math.ceil(fileLength / pageSize),
    pageStart: (page - 1) * pageSize,
    pageEnd: (page - 1) * pageSize + pageSize,
  };
};
