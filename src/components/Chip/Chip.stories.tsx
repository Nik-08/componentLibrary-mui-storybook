import { Chip } from "./Chip";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Avatar } from "../Avatar";
import DoneIcon from "@mui/icons-material/Done";
import TagFacesIcon from "@mui/icons-material/TagFaces";

export default {
  title: "UI/Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default chip",
  size: "small",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Chip with icon",
  sx: { maxWidth: 500 },
  variant: "outlined",
  icon: <TagFacesIcon />,
};

export const Custom = Template.bind({});
Custom.args = {
  label: "Custom delete icon",
  variant: "outlined",
  deleteIcon: <DoneIcon />,
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  label: "Nikta Galchenko",
  avatar: (
    <Avatar
      name='Nikta Galchenko'
      src='https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg'
    />
  ),
};

export const WithLetter = Template.bind({});
WithLetter.args = {
  label: "Nikta Galchenko",
  avatar: <Avatar name='Nikta Galchenko' />,
};
