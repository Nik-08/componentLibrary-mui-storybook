import React, { FC, ReactNode } from "react";
import { Wrapper } from "./Drawer.style";
import { DrawerProps } from "@mui/material/Drawer";

interface Props extends DrawerProps {
  children: ReactNode;
}

export const Drawer: FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <Wrapper {...props}>{children}</Wrapper>
    </>
  );
};
