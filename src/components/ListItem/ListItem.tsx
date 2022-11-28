import React, { FC, ReactNode } from "react";
import { Wrapper } from "./ListItem.style";
import { ListItemProps } from "@mui/material/ListItem";

interface Props extends ListItemProps {}

export const ListItem: FC<Props> = ({ ...props }) => {
  return <Wrapper {...props} />;
};
