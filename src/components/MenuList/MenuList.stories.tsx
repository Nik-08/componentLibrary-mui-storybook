import { MenuList } from "./MenuList";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Typography, MenuItem } from "@mui/material";

export default {
  title: "Menu/MenuList",
  component: MenuList,
  argTypes: {
    variant: {
      options: ["menu", "selectedMenu"],
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = (args) => (
  <MenuList>
    <MenuItem>
      <Typography textAlign='center'>
        1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        nulla.
      </Typography>
    </MenuItem>
    <MenuItem>
      <Typography textAlign='center'>
        2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        nulla.
      </Typography>
    </MenuItem>
    <MenuItem>
      <Typography textAlign='center'>
        3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        nulla.
      </Typography>
    </MenuItem>
  </MenuList>
);

export const Default = Template.bind({});
Default.args = {};
