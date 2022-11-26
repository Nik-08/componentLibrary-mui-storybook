import { Drawer } from "./Drawer";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../Button";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default {
  title: "UI/Drawer",
  component: Drawer,
  argTypes: {
    anchor: {
      options: ["top", "bottom", "left", "right"],
      control: {
        type: "radio",
      },
    },
    variant: {
      options: ["temporary", "permanent", "persistent"],
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <MenuIcon onClick={handleClickOpen}></MenuIcon>
      <Drawer {...args} open={open} onClose={handleClose}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
          <li>QA</li>
          <li>History</li>
          <li>Politic</li>
          <li>Reviews</li>
        </ul>
      </Drawer>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  hideBackdrop: true,
};
