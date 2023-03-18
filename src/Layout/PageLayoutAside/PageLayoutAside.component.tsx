import { Scrollbars } from 'rc-scrollbars';

import { SideNavigation } from '@common';

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
