import { Card } from "./Card";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../Button";

export default {
  title: "UI/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const WithImage = Template.bind({});
WithImage.args = {
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dignissimos.",
  cardActionContent: <Button variant='outlined'>Send</Button>,
  sx: { maxWidth: 500 },
  variant: "elevation",
  src: "https://upload.wikimedia.org/wikipedia/en/8/82/Lightning_McQueen.png",
};

export const Default = Template.bind({});
Default.args = {
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dignissimos.",
  cardActionContent: <Button variant='outlined'>Send</Button>,
  sx: { maxWidth: 500 },
  variant: "elevation",
  src: "",
};
