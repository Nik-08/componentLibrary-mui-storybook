import { BottomNavigation } from "./BottomNavigation";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default {
  title: "UI/BottomNavigation",
  component: BottomNavigation,
} as ComponentMeta<typeof BottomNavigation>;

const Template: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <BottomNavigation {...args} sx={{ width: 500, background: "#800080" }}>
      <BottomNavigationAction
        label='Recents'
        icon={<RestoreIcon color='secondary' />}
      />
      <BottomNavigationAction
        label='Favorites'
        icon={<FavoriteIcon color='secondary' />}
      />
      <BottomNavigationAction
        label='Nearby'
        icon={<LocationOnIcon color='secondary' />}
      />
    </BottomNavigation>
  );
};

export const Default = Template.bind({});
Default.args = {};
