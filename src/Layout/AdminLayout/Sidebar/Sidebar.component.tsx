import { context } from '@common';
import { Drawer } from '@style';
export const Sidebar: React.FC = () => {
  const { drawerOpen } = context.useContext();
  return (
    <Drawer variant="permanent" open={drawerOpen}>
      This is Drawer
    </Drawer>
  );
};
