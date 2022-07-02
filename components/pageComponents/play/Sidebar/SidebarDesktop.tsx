import { Drawer } from '@mui/material';
import SidebarBase from './Sidebar.Base';

interface Props {}

const SidebarDesktop = (props: Props) => {
  return (
    <div className="w-28">
      <Drawer
        classes={{
          paper: 'w-28',
        }}
        variant="permanent"
        open
      >
        <SidebarBase />
      </Drawer>
    </div>
  );
};

export default SidebarDesktop;
