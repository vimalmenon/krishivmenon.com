import { context } from '@context';
import Switch from '@mui/material/Switch';

import { SwitchThemeStyle } from './SwitchTheme.style';

export const SwitchTheme: React.FC = () => {
  const { theme } = context.useContext();
  const { switchTheme } = context.useCommonContext();

  return (
    <SwitchThemeStyle>
      <Switch checked={theme === 'dark'} onChange={switchTheme} />
    </SwitchThemeStyle>
  );
};
