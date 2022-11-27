import { FC } from "react";
import { Wrapper } from "./Header.style";
import { AppBarProps } from "@mui/material/AppBar";

interface Props extends AppBarProps {}

export const Header: FC<Props> = ({ ...props }) => {
  return <Wrapper {...props} />;
};
