import { Tabs } from "./Tabs";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Tab } from "@mui/material";
import React from "react";

export default {
  title: "UI/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Tabs
      {...args}
      value={value}
      onChange={handleChange}
      sx={{
        maxWidth: { xs: 320, sm: 480 },
        bgcolor: "secondary.light",
        color: "#fff",
      }}
    >
      <Tab label='Item One' />
      <Tab label='Item Two' />
      <Tab label='Item Three' />
      <Tab label='Item Four' />
      <Tab label='Item Five' />
      <Tab label='Item Six' />
      <Tab label='Item Seven' />
    </Tabs>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
