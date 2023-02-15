import { SideNavigation } from '@common';

import { PageLayoutAsideRoot } from './PageLayoutAside.style';

export const PageLayoutAside: React.FC = () => {
  return (
    <PageLayoutAsideRoot sx={{ borderColor: 'divider' }}>
      <SideNavigation />
    </PageLayoutAsideRoot>
  );
};
