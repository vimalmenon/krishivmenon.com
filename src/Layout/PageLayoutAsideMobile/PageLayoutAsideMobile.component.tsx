import { SideNavigation } from '@common';
import { useCommonContext } from '@context';

import { PageLayoutAsideMobileRoot } from './PageLayoutAsideMobile.style';

export const PageLayoutAsideMobile: React.FC = () => {
  const container = document.body;
  const { drawerOpen, switchDrawer } = useCommonContext();
  return (
    <PageLayoutAsideMobileRoot
      container={container}
      open={drawerOpen}
      onClose={switchDrawer}
      variant="temporary"
      ModalProps={{
        keepMounted: true,
      }}
    >
      <SideNavigation />
    </PageLayoutAsideMobileRoot>
  );
};
