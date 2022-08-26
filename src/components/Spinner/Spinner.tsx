import React, { FC } from "react";
import { Wrapper } from "./Spinner.style";
import { CircularProgressProps } from "@mui/material/CircularProgress";

interface Props extends CircularProgressProps {}

export const Spinner: FC<Props> = ({ ...props }) => <Wrapper {...props} />;
