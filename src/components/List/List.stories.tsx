import { ListItemIcon } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Typography } from "../Typography";
import { List } from "./List";

export default {
  title: "UI/List",
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <ListItem>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <Typography variant='body1' component='p'>
          Fuga vero tenetur ullam, obcaecati quia molestiae debitis!
        </Typography>
      </ListItem>
      <ListItem>
        <Typography variant='body1' component='p'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <Typography variant='body1' component='p'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </ListItem>
      <ListItem>
        <Typography variant='body1' component='p'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </ListItem>
    </>
  ),
  disablePadding: false,
  dense: false,
};
