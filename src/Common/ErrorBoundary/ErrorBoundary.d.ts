import { SxProps, Theme } from '@mui/material/styles';

export interface IErrorBoundaryProps {
  hasError: boolean;
}

export interface IErrorBoundaryChildren {
  sx?: SxProps<Theme>;
}
