import { Container } from "./Container";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { themeVariables } from "../../styles/themeVariables";

export default {
  title: "Container/Container",
  component: Container,
  argTypes: {
    maxWidth: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container
    {...args}
    sx={{
      padding: "10px",
      border: `1px solid ${themeVariables.palette.primary.main}`,
      minHeight: "50vh",
      borderRadius: "20px",
    }}
  />
);

export const Default = Template.bind({});
Default.args = {
  fixed: false,
};
