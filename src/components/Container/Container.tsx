import React, { FC, ReactNode } from "react";
import { Wrapper } from "./Container.style";
import { ContainerProps } from "@mui/material/Container";
import { CardContent, DialogActions } from "@mui/material";

interface Props extends ContainerProps {}

export const Container: FC<Props> = ({ ...props }) => {
  return (
    <>
      <Wrapper {...props} fixed></Wrapper>
    </>
  );
};
