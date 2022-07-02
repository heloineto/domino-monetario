import SecondaryIconButton from '@components/elements/buttons/SecondaryIconButton';
import { SwipeableDrawer } from '@mui/material';
import { List } from 'phosphor-react';
import { useState } from 'react';
import SidebarBase from './Sidebar.Base';

interface Props {}

const SidebarMobile = (props: Props) => {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <SecondaryIconButton
        className="absolute top-2.5 left-2.5 z-50"
        onClick={() => setOpen(true)}
      >
        <List className="h-4 w-4" />
      </SecondaryIconButton>
    );
  }

  return (
    <div>
      <SwipeableDrawer
        container={typeof window !== 'undefined' ? () => document.body : undefined}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        classes={{
          paper: 'w-36 pr-2.5 bg-white/70 overflow-visible',
        }}
        ModalProps={{ keepMounted: true }}
      >
        <SidebarBase />
      </SwipeableDrawer>
    </div>
  );
};

export default SidebarMobile;
