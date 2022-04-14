import { Popper, Portal } from '@mui/material';

interface Props {
  value: any;
}

const Debug = ({ value }: Props) => {
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
