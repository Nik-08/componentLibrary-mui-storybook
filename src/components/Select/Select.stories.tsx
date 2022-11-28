import { Select } from "./Select";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import React from "react";
import {
  MenuItem,
  InputLabel,
  SelectChangeEvent,
  FormControl,
} from "@mui/material";

export default {
  title: "Form/Select",
  component: Select,
  argTypes: {
    variant: {
      options: ["filled", "outlined", "standard"],
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id='demo-simple-select-label'>Age</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          {...args}
          label='Age'
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  autoWidth: false,
  defaultOpen: false,
  displayEmpty: false,
  native: false,
};
