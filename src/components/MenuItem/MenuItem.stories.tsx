import { MenuItem } from "./MenuItem";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Typography } from "@mui/material";

export default {
  title: "Menu/MenuItem",
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => {
  return (
    <>
      <MenuItem {...args}>
        <Typography textAlign='center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          nulla.
        </Typography>
      </MenuItem>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
