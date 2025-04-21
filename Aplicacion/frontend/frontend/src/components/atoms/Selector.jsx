import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
const Selector = ({
    label = "Selecciona una opción",
    options = [],
    value,
    onChange,
    labelKey = "label",
    valueKey = "value",
    ...rest
  }) => {
    return (
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={onChange} {...rest}>
          <MenuItem value="">
            <em>-- Selecciona --</em>
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option[valueKey]} value={option[valueKey]}>
              {option[labelKey]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };
export default Selector;
