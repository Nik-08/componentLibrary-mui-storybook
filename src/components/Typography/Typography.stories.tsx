import Typography from "@mui/material/Typography";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "UI/Typography",
  component: Typography,
  argTypes: {
    variant: {
      options: [
        "body1",
        "body2",
        "button",
        "caption",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "inherit",
        "overline",
        "subtitle1",
        "subtitle2",
      ],
      control: {
        type: "radio",
      },
    },
    align: {
      options: ["center", "inherit", "justify", "left", "right"],
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Lorem ipsum",
  paragraph: false,
  noWrap: false,
  gutterBottom: false,
};
