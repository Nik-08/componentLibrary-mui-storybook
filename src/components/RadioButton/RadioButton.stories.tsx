import { RadioButton } from "./RadioButton";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormControlLabel, Radio } from "@mui/material";

export default {
  title: "UI/RadioButton",
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args}>
    <FormControlLabel value='female' control={<Radio />} label='Female' />
    <FormControlLabel value='male' control={<Radio />} label='Male' />
    <FormControlLabel value='other' control={<Radio />} label='Other' />
  </RadioButton>
);

export const Default = Template.bind({});
Default.args = {
  row: false,
};
