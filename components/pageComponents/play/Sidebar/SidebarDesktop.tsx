import { Drawer } from '@mui/material';
import SidebarBase from './Sidebar.Base';

interface Props {}

const SidebarDesktop = (props: Props) => {
  return (
    <div className="w-32">
      <Drawer
        classes={{
          paper: 'w-32 bg-transparent border-none overflow-visible pl-2.5',
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
