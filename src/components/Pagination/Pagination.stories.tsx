import { Pagination } from "./Pagination";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "UI/Pagination",
  component: Pagination,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "radio",
      },
    },
    variant: {
      options: ["outlined", "text"],
      control: {
        type: "radio",
      },
    },
    shape: {
      options: ["circular", "rounded"],
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args}></Pagination>
);

export const Default = Template.bind({});
Default.args = {
  count: 100,
  defaultPage: 1,
  disabled: false,
  showLastButton: false,
  showFirstButton: false,
};
