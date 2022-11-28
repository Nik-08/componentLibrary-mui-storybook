import { TextareaAutosize } from "./TextareaAutosize";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Form/TextareaAutosize",
  component: TextareaAutosize,
} as ComponentMeta<typeof TextareaAutosize>;

const Template: ComponentStory<typeof TextareaAutosize> = (args) => {
  return <TextareaAutosize {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  maxRows: 10,
  minRows: 10,
  placeholder: "Minimum 3 rows",
  defaultValue: "Minimum 3 rows",
  disabled: false,
};
