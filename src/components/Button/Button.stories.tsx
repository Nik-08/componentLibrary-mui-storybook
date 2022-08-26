import { Button } from "./Button";
import { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";

type T = ComponentProps<typeof Button>;

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      defaultValue: "Button 1",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "text" },
      },
    },
    variant: {
      defaultValue: "contained",
    },
    loading: {
      type: "boolean",
      description: "Button while processing",
      defaultValue: false,
    },
    disabled: {
      type: "boolean",
      description: "Disabled button",
      defaultValue: false,
    },
  },
} as Meta;

const Template: Story<T> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: "Button Text", variant: "contained" };

export const Secondary = Template.bind({});
Secondary.args = { variant: "contained", color: "secondary" };
