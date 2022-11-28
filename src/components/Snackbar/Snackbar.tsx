import { FC } from "react";
import { Wrapper } from "./Snackbar.style";
import { SnackbarProps } from "@mui/material/Snackbar";

interface Props extends SnackbarProps {}

export const Snackbar: FC<Props> = ({ ...props }) => {
  return <Wrapper {...props} />;
};
