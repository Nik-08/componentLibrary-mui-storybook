import { Badge } from "./Badge";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default {
  title: "UI/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => {
  return (
    <>
      <Badge {...args}>
        <MailIcon color='secondary' />
      </Badge>
      <br />
      <br />
      <br />
      <Badge {...args}>
        <ShoppingCartIcon color='action' />
      </Badge>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  invisible: false,
  max: 15,
  showZero: false,
  color: "primary",
  badgeContent: 50,
};
