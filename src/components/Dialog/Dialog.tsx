import React, { FC, ReactNode } from "react";
import { Wrapper } from "./Dialog.style";
import { DialogProps } from "@mui/material/Dialog";

import { CardContent, DialogActions } from "@mui/material";

interface Props extends DialogProps {
  dialogActionContent: ReactNode;
  children: ReactNode;
}

export const Dialog: FC<Props> = ({
  children,
  dialogActionContent,
  ...props
}) => {
  return (
    <>
      <Wrapper {...props}>
        <CardContent>{children}</CardContent>
        <DialogActions>{dialogActionContent}</DialogActions>
      </Wrapper>
    </>
  );
};
