import { FC } from "react";
import { Wrapper } from "./Menu.style";
import { MenuProps } from "@mui/material/Menu";

interface Props extends MenuProps {}

export const Menu: FC<Props> = ({ ...props }) => {
  return <Wrapper {...props} />;
};
