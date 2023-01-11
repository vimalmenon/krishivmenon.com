import Switch from '@mui/material/Switch';
import { Container } from '@style';

import { HeaderSwitch } from './Header.style';

export const Header: React.FC = () => {
  return (
    <Container component="header" sx={{ display: 'flex', flex: '0 0 50px' }}>
      <Container component={'div'} sx={{ flex: '1 1 auto' }}>
        &nbsp;
      </Container>
      <Container component={'div'} sx={{ flex: '0 0 auto' }}>
        <HeaderSwitch>
          <Switch />
        </HeaderSwitch>
        <HeaderSwitch>
          <Switch />
        </HeaderSwitch>
      </Container>
    </Container>
  );
};
