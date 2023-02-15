import GoogleIcon from '@mui/icons-material/Google';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { IIcon, IIconStatic } from './Icon';
import { CommonIcons } from './Icon.service';

export const Icon: IIconStatic<typeof GoogleIcon> & React.FC<IIcon<typeof GoogleIcon>> = ({
  label,
  Icon,
  onClick,
}) => {
  return (
    <Tooltip title={label}>
      <IconButton onClick={onClick}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
};
Icon.icons = CommonIcons;
