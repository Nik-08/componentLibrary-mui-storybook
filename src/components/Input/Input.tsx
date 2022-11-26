import React, { FC, ReactNode } from "react";
import { Wrapper } from "./Input.style";
import { TextFieldProps } from "@mui/material/TextField";

type PropsInput = TextFieldProps;

export const Input: FC<PropsInput> = ({ ...props }) => {
  return <Wrapper {...props} />;
};
