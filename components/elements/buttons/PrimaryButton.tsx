import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';
import classNames from 'clsx';
import { useMemo } from 'react';
import twColors from 'tailwindcss/colors';

interface Props extends ButtonProps {
  colorName?: keyof typeof twColors;
}

const PrimaryButton = ({ className, colorName = 'sky', ...muiButtonProps }: Props) => {
  const color = twColors[colorName] as any;

  const StyledButton = useMemo(
    () =>
      styled(Button)(() => ({
        backgroundColor: `${color[100]} !important`,
        color: color[500],
        borderColor: color[400],
        '&:hover': {
          backgroundColor: `${color[200]} !important`,
          borderColor: color[500],
          color: color[600],
        },
      })),
    [, color]
  );

  return (
    <StyledButton
      className={classNames(
        className,
        'border-2 border-solid py-2 font-display text-base font-semibold tracking-widest transition-colors duration-500'
      )}
      variant="contained"
      {...muiButtonProps}
    />
  );
};

export default PrimaryButton;
