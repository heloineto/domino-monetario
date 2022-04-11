import { SnackbarProvider } from 'notistack';
import { CheckCircle, Info, WarningCircle, XCircle } from 'phosphor-react';

type Props = {
  children: ReactNode;
};

const CustomSnackbarProvider = ({ children }: Props) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      iconVariant={{
        success: (
          <CheckCircle
            className="h-6 w-auto text-emerald-500 dark:text-emerald-300 mr-2"
            weight="fill"
          />
        ),
        error: (
          <XCircle
            className="h-6 w-auto text-red-500 dark:text-red-300 mr-2"
            weight="fill"
          />
        ),
        warning: (
          <WarningCircle
            className="h-6 w-auto text-orange-500 dark:text-orange-300 mr-2"
            weight="fill"
          />
        ),
        info: (
          <Info
            className="h-6 w-auto text-sky-500 dark:text-sky-300 mr-2"
            weight="fill"
          />
        ),
      }}
      classes={{
        variantSuccess:
          '!bg-emerald-200 dark:!bg-emerald-600 !text-emerald-700 dark:!text-emerald-100 !shadow-lg border border-emerald-400 dark:border-emerald-400 !font-bold !text-sm !h-10 !rounded-full !p-0 !px-2 flex justify-center items-center',
        variantError:
          '!bg-red-200 dark:!bg-red-600 !text-red-700 dark:!text-red-100 !shadow-lg border border-red-400 dark:border-red-400 !rounded-md !font-bold',
        variantWarning:
          '!bg-orange-200 dark:!bg-orange-600 !text-orange-700 dark:!text-orange-100 !shadow-lg border border-orange-400 dark:border-orange-400 !rounded-md !font-bold',
        variantInfo:
          '!bg-sky-200 dark:!bg-sky-600 !text-sky-700 dark:!text-sky-100 !shadow-lg border border-sky-400 dark:border-sky-400 !rounded-md !font-bold',
      }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default CustomSnackbarProvider;
