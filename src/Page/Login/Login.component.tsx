import { Providers } from '@constant';

import { onClick } from './Login.service';
export const Login: React.FC = () => {
  return (
    <div>
      {Providers.map((provider, key) => {
        return (
          <button key={key} onClick={() => onClick(provider.provider)}>
            {provider.name}
          </button>
        );
      })}
    </div>
  );
};
