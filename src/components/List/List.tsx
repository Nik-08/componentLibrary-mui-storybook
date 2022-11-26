import React, { FC, ReactNode } from "react";
import { Wrapper } from "./List.style";
import { ListProps } from "@mui/material/List";

interface Props extends ListProps {}

export const List: FC<Props> = ({ ...props }) => {
  return <Wrapper {...props} />;
};
