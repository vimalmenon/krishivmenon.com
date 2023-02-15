import { SwitchTheme } from '@common';
import { useCommonContext } from '@context';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import {
  PageLayoutHeaderRoot,
  PageLayoutHeaderTitle,
  PageLayoutHeaderSide,
} from './PageLayoutHeader.style';

export const PageLayoutHeader: React.FC = () => {
  const { switchDrawer } = useCommonContext();

  return (
    <PageLayoutHeaderRoot sx={{ borderColor: 'divider' }}>
      {/* <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 1.5,
        }}
      > */}
      <PageLayoutHeaderTitle>
        <IconButton size="small" onClick={switchDrawer} sx={{ display: { sm: 'none' } }}>
          <MenuIcon />
        </IconButton>
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
      {/* </Box> */}

      {/* <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1.5 }}>
        <IconButton
          size="sm"
          variant="outlined"
          color="primary"
          component="a"
          href="/blog/first-look-at-joy/"
        >
          <BookRoundedIcon />
        </IconButton>
        <Menu
          id="app-selector"
          control={
            <IconButton size="sm" variant="outlined" color="primary" aria-label="Apps">
              <GridViewRoundedIcon />
            </IconButton>
          }
          menus={[
            {
              label: 'Email',
              active: true,
              href: '/joy-ui/getting-started/templates/email/',
              'aria-current': 'page',
            },
            {
              label: 'Team',
              href: '/joy-ui/getting-started/templates/team/',
            },
            {
              label: 'Files',
              href: '/joy-ui/getting-started/templates/files/',
            },
          ]}
        />
        <ColorSchemeToggle />
      </Box> */}
    </PageLayoutHeaderRoot>
  );
};
