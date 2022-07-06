import { Checkbox, FormControlLabel, Popover } from '@mui/material';
import { Question } from 'phosphor-react';
import { useRef, useState } from 'react';

interface Props extends ComponentProps<'div'> {
  label: string;
  popoverProps?: Omit<ComponentProps<typeof Popover>, 'open' | 'onClose'>;
}

const StartMenuCheckbox = ({ label, popoverProps, ...divProps }: Props) => {
  const [helpPopoverOpen, setHelpPopoverOpen] = useState(false);
  const helpRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex items-center gap-1" {...divProps}>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label={label}
        className="mr-0"
        classes={{
          label: 'font-display text-lg tracking-wider',
        }}
      />

      <button
        ref={helpRef}
        className="rounded-full bg-slate-200 text-slate-800"
        onClick={() => setHelpPopoverOpen(true)}
      >
        <Question className="h-4 w-4" weight="bold" />
      </button>
      <Popover
        open={helpPopoverOpen}
        anchorEl={helpRef.current}
        onClose={() => setHelpPopoverOpen(false)}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        {...popoverProps}
      />
    </div>
  );
};

export default StartMenuCheckbox;
