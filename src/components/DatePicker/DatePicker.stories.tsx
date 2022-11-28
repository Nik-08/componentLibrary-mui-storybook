import { useState } from "react";
import TextField from "@mui/material/TextField";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ruLocale from "date-fns/locale/ru";
import { DatePicker } from "./DatePicker";

export default {
  title: "UI/DatePicker",
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => {
  const [dateValue, setDateValue] = useState<Date | null | unknown>(new Date());

  const handleChangeDate = (newValue: Date | null | unknown) => {
    setDateValue(newValue);
  };

  return <DatePicker {...args} value={dateValue} onChange={handleChangeDate} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Дата",
  inputFormat: "dd.MM.yyyy",
  locale: ruLocale,
  renderInput: (params) => <TextField {...params} />,
};
