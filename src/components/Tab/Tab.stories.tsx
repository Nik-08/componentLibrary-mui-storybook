import { Tab } from "./Tab";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "UI/Tab",
  component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => {
  return <Tab {...args} label='Item One' />;
};

export const Primary = Template.bind({});
Primary.args = {};
