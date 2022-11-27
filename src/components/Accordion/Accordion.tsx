import { FC } from "react";
import { Wrapper } from "./Accordion.style";
import { AccordionProps } from "@mui/material/Accordion";

interface Props extends AccordionProps {}

export const Accordion: FC<Props> = ({ ...props }) => {
  return <Wrapper {...props} />;
};
