import { Avatar } from "./Avatar";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "UI/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Image = Template.bind({});
Image.args = {
  src: "https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg",
  alt: "user avatar",
  variant: "circular",
};

export const Default = Template.bind({});
Default.args = {
  src: "",
  name: "Tosi Bosi",
  alt: "no avatar",
  variant: "circular",
};
