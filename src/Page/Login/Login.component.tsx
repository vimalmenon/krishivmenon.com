import { Providers } from '@constant';
import Button from '@mui/material/Button';

import { onClick } from './Login.service';

export const Login: React.FC = () => {
  return (
    <div>
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
    </div>
  );
};
