import { useMediaQuery, useTheme } from '@mui/material';
import SidebarMobile from './Sidebar.Mobile';
import SidebarDesktop from './SidebarDesktop';

interface Props extends ComponentProps<'div'> {}

const Sidebar = ({ ...restProps }: Props) => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('lg'));

  if (isMobile) {
    return <SidebarMobile {...restProps} />;
  }

  return <SidebarDesktop {...restProps} />;
};

export default Sidebar;
