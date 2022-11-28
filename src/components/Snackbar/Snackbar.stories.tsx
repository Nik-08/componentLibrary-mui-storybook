import { Snackbar } from "./Snackbar";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Alert, Button, IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export default {
  title: "UI/Snackbar",
  component: Snackbar,
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = (args) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <>
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={handleClose}
      >
        <CloseIcon fontSize='small' />
      </IconButton>
    </>
  );

  return (
    <>
      <Button onClick={handleClick}>Open simple snackbar</Button>
      <Snackbar
        {...args}
        open={open}
        onClose={handleClose}
        message='Note archived'
        // action={action}
      >
        <Alert onClose={handleClose} severity='error' sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  autoHideDuration: 2000,
};
