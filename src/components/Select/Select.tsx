import { FC } from "react";
import { Wrapper } from "./Select.style";
import { SelectProps } from "@mui/material/Select";

interface Props extends SelectProps {}

export const Select: FC<Props> = ({ ...props }) => {
  return <Wrapper {...props} />;
};
