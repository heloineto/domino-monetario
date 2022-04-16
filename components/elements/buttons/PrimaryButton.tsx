import { Button, ButtonProps } from '@mui/material';

interface Props extends ButtonProps {}

const PrimaryButton = ({ ...muiButtonProps }: Props) => {
  return <Button variant="contained" {...muiButtonProps} />;
};

export default PrimaryButton;
