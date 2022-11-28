import { Switch } from "./Switch";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Form/Switch",
  component: Switch,
  argTypes: {
    size: {
      options: ["medium", "small"],
      control: {
        type: "radio",
      },
    },
    edge: {
      options: ["end", "start", false],
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  disableRipple: false,
  required: false,
};
