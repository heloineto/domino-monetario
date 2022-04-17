import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import classNames from 'clsx';
import { useMemo } from 'react';
import twColors from 'tailwindcss/colors';

interface Props extends ButtonProps {
  colorName?: keyof typeof twColors;
}

const SecondaryButton = ({ className, colorName = 'sky', ...muiButtonProps }: Props) => {
  const color = twColors[colorName] as any;

  const StyledButton = useMemo(
    () =>
      styled(Button)(() => ({
        color: color[500],
        borderColor: color[400],
        '&:hover': {
          borderColor: color[500],
          color: color[600],
        },
      })),
    [color]
  );

  return (
    <StyledButton
      className={classNames(
        className,
        'py-2 text-base font-semibold transition-colors duration-500'
      )}
      variant="outlined"
      {...muiButtonProps}
    />
  );
};

export default SecondaryButton;
