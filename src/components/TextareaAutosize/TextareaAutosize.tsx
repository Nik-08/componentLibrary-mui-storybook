import React, { FC } from "react";
import { Wrapper } from "./TextareaAutosize.style";
import { TextareaAutosizeProps } from "@mui/material/TextareaAutosize";

interface Props extends TextareaAutosizeProps {}

export const TextareaAutosize: FC<Props> = ({ ...props }) => (
  <Wrapper {...props} />
);
