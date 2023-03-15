import { SideNavigation } from '@common';
import { Scrollbars } from 'rc-scrollbars';

import { PageLayoutAsideRoot } from './PageLayoutAside.style';

export const PageLayoutAside: React.FC = () => {
  return (
    <PageLayoutAsideRoot>
      <Scrollbars>
        <SideNavigation />
      </Scrollbars>
    </PageLayoutAsideRoot>
  );
};
