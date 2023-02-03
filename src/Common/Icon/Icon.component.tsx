import AddIcon from '@mui/icons-material/Add';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FolderIcon from '@mui/icons-material/Folder';
import GoogleIcon from '@mui/icons-material/Google';
import HomeIcon from '@mui/icons-material/Home';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SaveIcon from '@mui/icons-material/Save';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { IIcon, IIconStatic } from './Icon';

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
Icon.icons = {
  Google: GoogleIcon,
  Home: HomeIcon,
  Photo: InsertPhotoIcon,
  Save: SaveIcon,
  Delete: DeleteIcon,
  Edit: EditIcon,
  Admin: AdminPanelSettingsIcon,
  Cancel: ClearIcon,
  Add: AddIcon,
  Check: CheckIcon,
  Folder: FolderIcon,
};
