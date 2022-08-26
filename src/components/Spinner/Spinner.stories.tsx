import { Spinner } from "./Spinner";
import { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";

type T = ComponentProps<typeof Spinner>;

export default {
  title: "Spinner",
  component: Spinner,
} as Meta;

const Template: Story<T> = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
