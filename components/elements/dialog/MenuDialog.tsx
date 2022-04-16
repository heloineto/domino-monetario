import { Dialog, DialogProps } from '@mui/material';
import PrimaryIconButton from '../buttons/PrimaryIconButton';
import XButton from '../buttons/XButton';

interface Props extends Omit<DialogProps, 'onClose'> {
  onClose?: () => void;
}

const MenuDialog = ({ onClose, children, ...muiDialogProps }: Props) => {
  return (
    <Dialog
      fullScreen
      onClose={onClose}
      classes={{
        paper: 'bg-white/10 relative',
      }}
      {...muiDialogProps}
    >
      {onClose && (
        <XButton className="absolute top-5 right-5 h-10 w-10" onClick={onClose} />
      )}
      {children}
    </Dialog>
  );
};

export default MenuDialog;
