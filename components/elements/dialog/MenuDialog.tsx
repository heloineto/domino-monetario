import { Dialog, DialogProps } from '@mui/material';
import { X } from 'phosphor-react';
import SecondaryIconButton from '../buttons/SecondaryIconButton';

interface Props extends Omit<DialogProps, 'onClose'> {
  onClose?: () => void;
}

const MenuDialog = ({ onClose, children, ...muiDialogProps }: Props) => {
  return (
    <Dialog
      fullScreen
      onClose={onClose}
      classes={{ paper: 'bg-white/10' }}
      {...muiDialogProps}
    >
      {onClose && (
        <SecondaryIconButton
          className="absolute top-2 right-5 h-12 w-12"
          onClick={onClose}
          colorName="red"
        >
          <X className="h-7 w-7" />
        </SecondaryIconButton>
      )}
      <div className="flex h-full items-center justify-center">
        <div className="rounded-2xl border-2 border-white bg-white/50 px-5 py-10 sm:px-10 md:px-14 lg:px-16 xl:px-20">
          {children}
        </div>
      </div>
    </Dialog>
  );
};

export default MenuDialog;
