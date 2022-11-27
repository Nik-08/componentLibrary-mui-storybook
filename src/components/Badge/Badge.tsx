import { FC } from "react";
import { Wrapper } from "./Badge.style";
import { BadgeProps } from "@mui/material/Badge";

interface Props extends BadgeProps {}

export const Badge: FC<Props> = ({ ...props }) => {
  return <Wrapper {...props} />;
};
