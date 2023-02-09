import { useCommonContext } from '@context';
import Switch from '@mui/material/Switch';

import { SwitchThemeStyle } from './SwitchTheme.style';

export const SwitchTheme: React.FC = () => {
  const { switchTheme, theme } = useCommonContext();

  return (
    <SwitchThemeStyle>
      <Switch checked={theme === 'dark'} onChange={switchTheme} />
    </SwitchThemeStyle>
  );
};
