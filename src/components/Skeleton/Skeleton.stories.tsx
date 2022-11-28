import { Skeleton } from "./Skeleton";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Stack } from "@mui/material";

export default {
  title: "UI/Skeleton",
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <>
    <Stack spacing={1}>
      <Skeleton {...args} width={40} height={40} />
      <Skeleton {...args} width={210} height={60} />
      <Skeleton {...args} width={210} height={60} />
    </Stack>
  </>
);

export const Default = Template.bind({});
Default.args = {};
