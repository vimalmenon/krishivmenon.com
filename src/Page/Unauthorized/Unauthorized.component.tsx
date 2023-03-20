import { UnauthorizedRoot } from './Unauthorized.style';

export const Unauthorized: React.FC = () => {
  return (
    <UnauthorizedRoot data-testid="unauthorized-message">
      You are not authorized to this website.
    </UnauthorizedRoot>
  );
};
