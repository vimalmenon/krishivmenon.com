import SaveIcon from '@mui/icons-material/Save';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { GoogleIcon } from './custom';
import { IIcon, IIconStatic } from './Icon';
import { CommonIcons } from './Icon.service';

export const Icon: IIconStatic<typeof SaveIcon | typeof GoogleIcon> &
  React.FC<IIcon<typeof SaveIcon | typeof GoogleIcon>> = ({ label, Icon, onClick, edge }) => {
  return (
    <Tooltip title={label}>
      <IconButton onClick={onClick} edge={edge}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
};
Icon.icons = CommonIcons;
