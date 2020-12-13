import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const CustomSelect = ({ handleChange, value, options, label, className }) => {
  return (
    <FormControl variant="outlined" className={className}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        label={label}
        className={className}
      >
        {options.map(x => {
          return <MenuItem value={x.value}>{x.label}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
