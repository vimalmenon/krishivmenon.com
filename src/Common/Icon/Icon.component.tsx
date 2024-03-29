import React from 'react';

import SaveIcon from '@mui/icons-material/Save';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { IGenericReturn } from '@types';

import { GoogleIcon } from './custom';
import { IIcon, IIconStatic } from './Icon';
import { CommonIcons } from './Icon.service';

export const Icon: IIconStatic<typeof SaveIcon | typeof GoogleIcon> &
  React.FC<IIcon<typeof SaveIcon | typeof GoogleIcon>> = ({
  edge,
  Icon,
  label,
  onClick,
  disabled = false,
  showLoading = false,
}) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const onButtonClick: IGenericReturn<Promise<unknown>> = async () => {
    if (showLoading && onClick) {
      setLoading(true);
      await onClick();
      setLoading(false);
    } else {
      onClick && onClick();
    }
  };
  if (disabled) {
    return (
      <IconButton onClick={onButtonClick} edge={edge} disabled={loading || disabled}>
        {loading ? <CircularProgress size={'20px'} /> : <Icon />}
      </IconButton>
    );
  }
  return (
    <Tooltip title={label}>
      <IconButton onClick={onButtonClick} edge={edge} disabled={loading || disabled}>
        {loading ? <CircularProgress size={'20px'} /> : <Icon />}
      </IconButton>
    </Tooltip>
  );
};
Icon.icons = CommonIcons;
