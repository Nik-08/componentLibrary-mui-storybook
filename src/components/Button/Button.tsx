import React, { FC, ReactNode } from "react";
import { Wrapper } from "./Button.style";
import { ButtonProps } from "@mui/material/Button";
import { Spinner } from "../Spinner";

interface MainButtonProps extends ButtonProps {
  loading?: boolean;
}

export const Button: FC<MainButtonProps> = ({
  loading,
  children,
  ...props
}) => {
  return (
    <>
      {loading ? (
        <Wrapper {...props} disabled>
          <Spinner size={"20px"} />
        </Wrapper>
      ) : (
        <Wrapper {...props}>{children}</Wrapper>
      )}
    </>
  );
};
