import React, { FC } from "react";
import { Wrapper } from "./Tab.style";
import { TabProps } from "@mui/material/Tab";

interface Props extends TabProps {}

export const Tab: FC<Props> = ({ ...props }) => <Wrapper {...props} />;
