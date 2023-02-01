import { ENV } from '@constant';
import { IGenericParam } from '@types';

export const onClick: IGenericParam<string> = (provider) => {
  const { origin, pathname } = window.location;
  window.location.href = `${
    ENV.AUTH_URL
  }?identity_provider=${provider}&redirect_uri=http://localhost:3000/&response_type=token&client_id=${
    ENV.AUTH_CLIENT_ID
  }&state=${origin + pathname}`;
};
