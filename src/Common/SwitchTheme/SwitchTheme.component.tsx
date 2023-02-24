import { useCommonContext } from '@context';
import { useCommon } from '@hook';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import IconButton from '@mui/material/IconButton';

import { SwitchThemeStyle } from './SwitchTheme.style';

export const SwitchTheme: React.FC = () => {
  const { theme } = useCommonContext();
  const { switchTheme } = useCommon();

  return (
    <SwitchThemeStyle>
      <IconButton onClick={switchTheme}>
        {theme === 'dark' ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
      </IconButton>
    </SwitchThemeStyle>
  );
};
