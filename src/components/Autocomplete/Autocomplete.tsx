import { FC } from "react";
import { Wrapper } from "./Autocomplete.style";
import { AutocompleteProps } from "@mui/material/Autocomplete";
import { ChipTypeMap } from "@mui/material/Chip";

type Props<T> = AutocompleteProps<
  T,
  boolean | undefined,
  boolean | undefined,
  boolean | undefined,
  ChipTypeMap["defaultComponent"]
>;

export const Autocomplete: FC<Props<unknown>> = ({ ...props }) => {
  return <Wrapper {...props} />;
};
