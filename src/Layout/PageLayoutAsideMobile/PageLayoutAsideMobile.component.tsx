import { SideNavigation } from '@common';

import { PageLayoutAsideMobileRoot } from './PageLayoutAsideMobile.style';

export const PageLayoutAsideMobile: React.FC = () => {
  const container = document.body;
  return (
    <PageLayoutAsideMobileRoot
      container={container}
      open={true}
      onClose={() => false}
      variant="temporary"
      ModalProps={{
        keepMounted: true,
      }}
    >
      <SideNavigation />
    </PageLayoutAsideMobileRoot>
  );
};
