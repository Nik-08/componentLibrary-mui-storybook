import { FC } from "react";

import { Wrapper } from "./Checkbox.style";
import { CheckboxProps } from "@mui/material/Checkbox";

import FormControlLabel from "@mui/material/FormControlLabel";

interface Props extends CheckboxProps {
  label: string;
}

export const Checkbox: FC<Props> = ({ label, ...props }) => {
  return <FormControlLabel label={label} control={<Wrapper {...props} />} />;
};
