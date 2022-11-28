import { ListItemIcon } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import InboxIcon from "@mui/icons-material/Inbox";
import { Typography } from "../Typography";
import { ListItem } from "./ListItem";

export default {
  title: "UI/ListItem",
  component: ListItem,
  argTypes: {
    alignItems: {
      options: ["center", "flex-start"],
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => (
  <ListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Typography variant='body1' component='p'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
    </>
  ),
  autoFocus: false,
  dense: false,
  disabled: false,
  disableGutters: false,
  disablePadding: false,
  divider: false,
  selected: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: (
    <>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <Typography variant='body1' component='p'>
        Fuga vero tenetur ullam, obcaecati quia molestiae debitis!
      </Typography>
    </>
  ),
  autoFocus: false,
  dense: false,
  disabled: false,
  disableGutters: false,
  disablePadding: false,
  divider: false,
  selected: false,
};
