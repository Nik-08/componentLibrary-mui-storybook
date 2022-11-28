import { FC } from "react";
import { Wrapper } from "./Skeleton.style";
import { SkeletonProps } from "@mui/material/Skeleton";

interface Props extends SkeletonProps {}

export const Skeleton: FC<Props> = ({ ...props }) => {
  return <Wrapper {...props} />;
};
