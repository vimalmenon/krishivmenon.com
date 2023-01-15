import { ENV } from '@constant';

export const onClick = (provider: string) => {
  const { origin, pathname } = window.location;
  window.location.href = `${
    ENV.AUTH_URL
  }?identity_provider=${provider}&redirect_uri=http://localhost:3000/&response_type=token&client_id=${
    ENV.AUTH_CLIENT_ID
  }&state=${origin + pathname}`;
};
