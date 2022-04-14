import { Popper, Portal } from '@mui/material';

interface Props {
  value: any;
  hidden?: boolean;
}

const Debug = ({ value, hidden }: Props) => {
  if (hidden) return null;

  return (
    <Portal>
      <Popper open={true} placement="top-end">
        <div className="rounded-lg bg-white bg-opacity-50">
          <pre>{JSON.stringify(value, null, 2)}</pre>
        </div>
      </Popper>
    </Portal>
  );
};

export default Debug;
