import { SwitchTheme } from '@common';
import { useCommonContext } from '@context';
import { useCommon } from '@hook';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import {
  PageLayoutHeaderRoot,
  PageLayoutHeaderTitle,
  PageLayoutHeaderSide,
} from './PageLayoutHeader.style';

export const PageLayoutHeader: React.FC = () => {
  const { switchDrawer } = useCommon();
  const { profile } = useCommonContext();
  return (
    <PageLayoutHeaderRoot>
      <PageLayoutHeaderTitle>
        {profile && (
          <IconButton size="small" onClick={switchDrawer} sx={{ display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography component="h1" fontWeight="xl" sx={{ display: { xs: 'none', sm: 'inherit' } }}>
          Krishiv Menon
        </Typography>
        <Typography component="h1" fontWeight="xl" sx={{ display: { xs: 'inherit', sm: 'none' } }}>
          KM
        </Typography>
      </PageLayoutHeaderTitle>
      <PageLayoutHeaderSide>
        <SwitchTheme />
      </PageLayoutHeaderSide>
    </PageLayoutHeaderRoot>
  );
};
