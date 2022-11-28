import React, { FC } from "react";
import { Wrapper } from "./Switch.style";
import { SwitchProps } from "@mui/material/Switch";

interface Props extends SwitchProps {}

export const Switch: FC<Props> = ({ ...props }) => <Wrapper {...props} />;
