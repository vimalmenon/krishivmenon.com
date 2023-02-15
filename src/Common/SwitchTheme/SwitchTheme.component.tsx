import { useCommonContext } from '@context';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import IconButton from '@mui/material/IconButton';

import { SwitchThemeStyle } from './SwitchTheme.style';

export const SwitchTheme: React.FC = () => {
  const { switchTheme, theme } = useCommonContext();

  return (
    <SwitchThemeStyle>
      <IconButton onClick={switchTheme}>
        {theme === 'dark' ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
      </IconButton>
    </SwitchThemeStyle>
  );
};
