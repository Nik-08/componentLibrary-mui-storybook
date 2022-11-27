import { FC } from "react";
import { Wrapper } from "./Range.style";
import { SliderProps } from "@mui/material/Slider";

interface Props extends SliderProps {}

export const Range: FC<Props> = ({ ...props }) => {
  return <Wrapper {...props} />;
};
