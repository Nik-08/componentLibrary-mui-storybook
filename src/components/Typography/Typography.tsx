import React, { FC, ReactNode } from "react";
import { Wrapper } from "./Typography.style";
import { TypographyProps } from "@mui/material/Typography";

interface Props extends TypographyProps {
  children: ReactNode;
  component: string;
}

export const Typography: FC<Props> = ({ component, children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};
