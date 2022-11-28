import { FC } from "react";
import { Wrapper } from "./MenuList.style";
import { MenuListProps } from "@mui/material/MenuList";

interface Props extends MenuListProps {}

export const MenuList: FC<Props> = ({ ...props }) => {
  return <Wrapper {...props} />;
};
