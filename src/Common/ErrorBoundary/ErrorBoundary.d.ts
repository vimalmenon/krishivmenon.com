import { SxProps, Theme } from '@mui/material/styles';

export interface IErrorBoundaryProps {
  hasError: boolean;
  error?: string;
}

export interface IErrorBoundaryChildren {
  sx?: SxProps<Theme>;
}
