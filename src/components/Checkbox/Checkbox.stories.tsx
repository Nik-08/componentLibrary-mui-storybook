import { Checkbox } from "./Checkbox";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "'It's' you? ",
};
