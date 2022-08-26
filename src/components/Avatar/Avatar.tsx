import React, { FC } from "react";
import { Wrapper } from "./Avatar.style";
import { AvatarProps } from "@mui/material/Avatar";

interface Props extends AvatarProps {
  src?: string;
  name: string;
  color?: string;
}

export const Avatar: FC<Props> = ({
  src,
  name = "No Name",
  color,
  ...props
}) => {
  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: color,
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return <Wrapper src={src} {...stringAvatar(name)} {...props} />;
};
