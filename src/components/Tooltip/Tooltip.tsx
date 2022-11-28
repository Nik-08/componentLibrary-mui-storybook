import React, { FC } from "react";
import { Wrapper } from "./Tooltip.style";
import { TooltipProps } from "@mui/material/Tooltip";

interface Props extends TooltipProps {}

export const Tooltip: FC<Props> = ({ ...props }) => <Wrapper {...props} />;
