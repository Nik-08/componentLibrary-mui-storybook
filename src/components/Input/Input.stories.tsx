import { Input } from "./Input";
import { FormControl } from "@mui/material";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Form/TextField",
  component: Input,
  argTypes: {
    variant: {
      options: ["outlined", "filled", "standard"],
      control: {
        type: "radio",
      },
    },
    size: {
      options: ["medium", "small"],
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Input label",
  disabled: false,
  defaultValue: "Hello World",
  required: false,
  fullWidth: false,
  multiline: false,
};
