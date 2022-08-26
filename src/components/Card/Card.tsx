import React, { FC, ReactNode } from "react";
import { Wrapper } from "./Card.style";
import { CardProps } from "@mui/material/Card";
import { CardActions, CardContent, CardMedia } from "@mui/material";

interface Props extends CardProps {
  children: ReactNode;
  cardActionContent: ReactNode;
  src: string;
}

export const Card: FC<Props> = ({
  children,
  cardActionContent,
  src,
  ...props
}) => (
  <Wrapper {...props}>
    {src ? (
      <CardMedia component='img' image={src} alt='Lightning McQueen' />
    ) : null}
    <CardContent>{children}</CardContent>
    <CardActions>{cardActionContent}</CardActions>
  </Wrapper>
);
