import { FC } from "react";
import { Wrapper } from "./BottomNavigation.style";
import { BottomNavigationProps } from "@mui/material/BottomNavigation";

interface Props extends BottomNavigationProps {}

export const BottomNavigation: FC<Props> = ({ ...props }) => {
  return <Wrapper {...props} />;
};
