import { FC } from "react";
import { Wrapper } from "./RadioButton.style";
import { RadioGroupProps } from "@mui/material/RadioGroup";

interface Props extends RadioGroupProps {}

export const RadioButton: FC<Props> = ({ ...props }) => {
  return <Wrapper {...props} />;
};
