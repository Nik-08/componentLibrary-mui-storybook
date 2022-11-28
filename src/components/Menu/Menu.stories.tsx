import React from "react";
import { Menu } from "./Menu";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, Typography, MenuItem } from "@mui/material";

export default {
  title: "Menu/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => {
  const pages = ["Products", "Pricing", "Blog"];

  const [open, setOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const handleClose = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Button onClick={handleClick}>Dashboard</Button>
      <Menu {...args} open={open} onClose={handleClose}>
        {pages.map((page) => (
          <MenuItem key={page}>
            <Typography textAlign='center'>{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
