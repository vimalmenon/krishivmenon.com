import { signInUrl } from '@context';
import { IGenericParam } from '@types';

export const onClick: IGenericParam<string> = (provider) => {
  const { origin, pathname } = window.location;
  window.location.href = signInUrl({
    provider,
    state: `${origin}${pathname}`,
    redirectUrl: `${origin}/`,
  });
};
