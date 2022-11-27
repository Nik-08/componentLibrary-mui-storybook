import { Autocomplete } from "./Autocomplete";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextField from "@mui/material/TextField";

export default {
  title: "Form/Autocomplete",
  component: Autocomplete,
  argTypes: {
    blurOnSelect: {
      options: ["mouse", "touch"],
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => {
  const topFilms = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];
  return (
    <Autocomplete
      {...args}
      options={topFilms}
      renderInput={(params) => <TextField {...params} label='Movie' />}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  autoHighlight: false,
  autoSelect: false,
  fullWidth: false,
  disabled: false,
};
