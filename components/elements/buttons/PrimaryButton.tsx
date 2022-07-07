import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';
import classNames from 'clsx';
import { useMemo } from 'react';
import twColors from 'tailwindcss/colors';

interface Props extends ButtonProps {
  colorName?: keyof typeof twColors;
}

const PrimaryButton = ({
  className,
  colorName = 'sky',
  variant = 'contained',
  ...muiButtonProps
}: Props) => {
  const color = twColors[colorName] as any;
  const isContained = variant === 'contained';

  const StyledButton = useMemo(
    () =>
      styled(Button)(() => ({
        backgroundColor: isContained
          ? `${color[100]} !important`
          : `${color[50]}50 !important`,
        color: color[isContained ? 500 : 400],
        borderColor: color[isContained ? 400 : 300],
        '&:hover': {
          backgroundColor: `${color[200]} !important`,
          borderColor: color[500],
          color: color[600],
          boxShadow: `0 2px 10px 1px ${color[500]}70`,
        },
      })),
    [isContained, color]
  );

  return (
    <StyledButton
      className={classNames(
        className,
        'w-full border-2 border-solid py-2 font-display text-xl font-semibold tracking-widest shadow-xl transition-colors duration-500'
      )}
      variant={variant}
      {...muiButtonProps}
    />
  );
};

export default PrimaryButton;
