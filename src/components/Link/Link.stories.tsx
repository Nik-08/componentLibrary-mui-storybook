import { Link } from "./Link";
import { FormControl } from "@mui/material";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "UI/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args} sx={{ cursor: "pointer" }}>
    Button Link
  </Link>
);

export const Default = Template.bind({});
Default.args = {};
