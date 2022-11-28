import { FC } from "react";
import { Wrapper } from "./DatePicker.style";
import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { Locale } from "date-fns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ruLocale from "date-fns/locale/ru";

interface MainDatePickerProps extends DatePickerProps<unknown, unknown> {
  locale?: Locale;
}

export const DatePicker: FC<MainDatePickerProps> = ({
  locale = ruLocale,
  ...props
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={locale}>
      <Wrapper {...props} />
    </LocalizationProvider>
  );
};
