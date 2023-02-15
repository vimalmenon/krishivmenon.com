import { Providers } from '@constant';
import Button from '@mui/material/Button';

import { onClick } from './Login.service';
import {LoginRoot} from "./Login.style";

export const Login: React.FC = () => {
  return (
    <LoginRoot>
      {Providers.map((provider, key) => {
        return (
          <Button
            variant="outlined"
            key={key}
            startIcon={<provider.Icon />}
            onClick={() => onClick}
          >
            {' '}
            Sign in with {provider.name}
          </Button>
        );
      })}
    </LoginRoot>
  );
};
