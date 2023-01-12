import { context } from '@common';
import Switch from '@mui/material/Switch';
import { Container } from '@style';

import { HeaderSwitch } from './Header.style';

export const Header: React.FC = () => {
  const { theme } = context.useContext();
  const { switchTheme } = context.useThemeSwitcher();
  return (
    <Container component="header" sx={{ display: 'flex', flex: '0 0 50px' }}>
      <Container component={'div'} sx={{ flex: '1 1 auto' }}>
        &nbsp;
      </Container>
      <Container component={'div'} sx={{ flex: '0 0 auto' }}>
        <HeaderSwitch>
          <Switch checked={theme === 'dark'} onChange={switchTheme} />
        </HeaderSwitch>
        <HeaderSwitch>
          <Switch />
        </HeaderSwitch>
      </Container>
    </Container>
  );
};
