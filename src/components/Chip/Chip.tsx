import React, { FC } from "react";
import { Wrapper } from "./Chip.style";
import { ChipProps } from "@mui/material/Chip";

interface Props extends ChipProps {
  label: string;
}

export const Chip: FC<Props> = ({ label, ...props }) => {
  return <Wrapper {...props} label={label}></Wrapper>;
};
