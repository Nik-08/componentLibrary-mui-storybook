import React, { FC } from "react";
import { Wrapper } from "./Tabs.style";
import { TabsProps } from "@mui/material/Tabs";

interface Props extends TabsProps {}

export const Tabs: FC<Props> = ({ ...props }) => <Wrapper {...props} />;
