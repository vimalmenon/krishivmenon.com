import { Drawer } from '@style';

export const Sidebar: React.FC = () => {
  return (
    <div>
      <Drawer variant="permanent" open={true}>
        This is Drawer
      </Drawer>
    </div>
  );
};
