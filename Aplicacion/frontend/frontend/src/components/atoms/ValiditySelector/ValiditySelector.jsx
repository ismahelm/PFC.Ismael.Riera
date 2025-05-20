import React from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ValiditySelector = ({validity, setValidity}) => {
const {t} = useTranslation()
  const handleChange = (event) => {
    const value = event.target.value;
    setValidity(value);
  };

  return (
    <FormControl >
      <InputLabel id="duration-label">{t("newCourseCard.validity.title")}</InputLabel>
      <Select
        labelId="duration-label"
        value={validity}
        label="Duración"
        onChange={handleChange}
        sx={{
          width: "590px",
          marginTop: "10px",
          marginBottom: "10px"
      }}
      >
        <MenuItem value={180}>{t("newCourseCard.validity.low")}</MenuItem>
        <MenuItem value={365}>{t("newCourseCard.validity.medium")}</MenuItem>
        <MenuItem value={730}>{t("newCourseCard.validity.high")}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ValiditySelector;
