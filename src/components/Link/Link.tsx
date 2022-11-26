import React, { FC, ReactNode } from "react";
import { Wrapper } from "./Link.style";
import { LinkProps } from "@mui/material/Link";

interface Props extends LinkProps {}

export const Link: FC<Props> = ({ ...props }) => {
  return <Wrapper {...props} />;
};
