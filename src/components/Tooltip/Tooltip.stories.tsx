import { Tooltip } from "./Tooltip";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default {
  title: "UI/Tooltip",
  component: Tooltip,
  argTypes: {
    placement: {
      options: [
        "bottom-end",
        "bottom-start",
        "bottom",
        "left-end",
        "left-start",
        "left",
        "right-end",
        "right-start",
        "right",
        "top-end",
        "top-start",
        "top",
      ],
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => {
  return (
    <Tooltip {...args} title='Delete'>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  arrow: false,
  describeChild: false,
  disableFocusListener: false,
  disableHoverListener: false,
  disableInteractive: false,
  disableTouchListener: false,
  enterDelay: 100,
  enterNextDelay: 0,
  enterTouchDelay: 700,
  followCursor: false,
  leaveDelay: 0,
};
