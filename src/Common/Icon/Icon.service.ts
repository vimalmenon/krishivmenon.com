import AddIcon from '@mui/icons-material/Add';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FolderIcon from '@mui/icons-material/Folder';
import GoogleIcon from '@mui/icons-material/Google';
import HomeIcon from '@mui/icons-material/Home';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SaveIcon from '@mui/icons-material/Save';

import { IconTypes } from './Icon';

export const CommonIcons: Record<IconTypes, typeof GoogleIcon> = {
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
  CloudUpload: CloudUploadIcon,
};
