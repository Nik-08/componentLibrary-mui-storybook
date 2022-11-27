import { FC } from "react";
import { Wrapper } from "./Modal.style";
import { ModalProps } from "@mui/material/Modal";

interface Props extends ModalProps {}

export const Modal: FC<Props> = ({ ...props }) => {
  return <Wrapper {...props} />;
};
