import { FC } from "react";
import { Wrapper } from "./Pagination.style";
import { PaginationProps } from "@mui/material/Pagination";

interface Props extends PaginationProps {}

export const Pagination: FC<Props> = ({ ...props }) => {
  return <Wrapper {...props} />;
};
