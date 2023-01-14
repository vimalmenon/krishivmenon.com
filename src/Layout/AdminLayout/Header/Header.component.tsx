import { SwitchTheme } from '@common';
import Toolbar from '@mui/material/Toolbar';
import { AppBar, Container } from '@style';

export const Header: React.FC = () => {
  return (
    <AppBar position="absolute" open={true}>
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
          display: 'flex',
          flex: '1 1 auto',
        }}
      >
        <Container component="section" sx={{ flex: '1 1 auto' }}>
          &nbsp;
        </Container>
        <Container component="section" sx={{ flex: '0 0 auto' }}>
          <SwitchTheme />
        </Container>
      </Toolbar>
    </AppBar>
  );
};
