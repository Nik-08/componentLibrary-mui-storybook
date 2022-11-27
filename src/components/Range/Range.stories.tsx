import { Range } from "./Range";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Stack from "@mui/material/Stack";
import { VolumeDown, VolumeUp } from "@mui/icons-material";

export default {
  title: "UI/Range",
  component: Range,
} as ComponentMeta<typeof Range>;

const Template: ComponentStory<typeof Range> = (args) => (
  <>
    <Stack
      spacing={2}
      direction='row'
      sx={{ mb: 1, width: 300 }}
      alignItems='center'
    >
      <VolumeDown />
      <Range {...args} />
      <VolumeUp />
    </Stack>
  </>
);

export const Default = Template.bind({});
Default.args = {
  marks: false,
  min: 10,
  max: 110,
  step: 10,
  defaultValue: 30,
  disabled: false,
  disableSwap: false,
};
