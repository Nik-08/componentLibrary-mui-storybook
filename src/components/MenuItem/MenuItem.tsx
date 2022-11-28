import { FC } from "react";
import { Wrapper } from "./MenuItem.style";
import { MenuItemProps } from "@mui/material/MenuItem";

interface Props extends MenuItemProps {}

export const MenuItem: FC<Props> = ({ ...props }) => {
  return <Wrapper {...props} />;
};
