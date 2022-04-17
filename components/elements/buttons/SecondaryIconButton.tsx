import { IconButton, IconButtonProps } from '@mui/material';
import classNames from 'clsx';
import { styled } from '@mui/material/styles';
import { useMemo } from 'react';
import twColors from 'tailwindcss/colors';

interface Props extends IconButtonProps {
  colorName?: keyof typeof twColors;
}

const SecondaryIconButton = ({
  className,
  colorName = 'sky',
  ...muiButtonProps
}: Props) => {
  const color = twColors[colorName] as any;

  const StyledIconButton = useMemo(
    () =>
      styled(IconButton)(() => ({
        backgroundColor: `${color[100]} !important`,
        color: color[700],
        '--tw-ring-color': color[300],
        '&:hover': {
          backgroundColor: `${color[200]} !important`,
          borderColor: color[500],
          color: color[800],
          '--tw-ring-color': color[500],
          '--tw-shadow-color': color[300],
          '--tw-shadow': 'var(--tw-shadow-colored) !important',
        },
        '&:focus': {
          '--tw-ring-color': color[500],
        },
      })),
    [color]
  );

  return (
    <StyledIconButton
      className={classNames(
        className,
        'font-medium ring-1 hover:shadow-[0_0_8px_0.5px_rgba(0,0,0,1)] focus:outline-none focus:ring-2'
      )}
      {...muiButtonProps}
    />
  );
};

export default SecondaryIconButton;
