import React from 'react';

import { Providers } from '@constant';
import LoadingButton from '@mui/lab/LoadingButton';
import { IGenericParam } from '@types';

import { onClick } from './Login.service';
import { LoginRoot } from './Login.style';

export const Login: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const onLogin: IGenericParam<string> = (provider) => {
    setLoading(true);
    onClick(provider);
  };
  return (
    <LoginRoot>
      {Providers.map((provider, key) => {
        return (
          <LoadingButton
            key={key}
            onClick={() => onLogin(provider.provider)}
            startIcon={<provider.Icon />}
            loading={loading}
            loadingPosition="start"
            variant="outlined"
          >
            <span>Sign in with {provider.name}</span>
          </LoadingButton>
        );
      })}
    </LoginRoot>
  );
};
