import { Popper, Portal } from '@mui/material';

interface Props {
  value: any;
  hidden?: boolean;
}

const Debug = ({ value, hidden }: Props) => {
  if (hidden) return null;

  return (
    <Portal>
      <div className="absolute top-0 right-0 z-[100] rounded-lg bg-white bg-opacity-50">
        <pre>{JSON.stringify(value, null, 2)}</pre>
      </div>
    </Portal>
  );
};

export default Debug;
