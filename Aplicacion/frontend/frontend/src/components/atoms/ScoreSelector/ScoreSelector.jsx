import React from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ScoreSelector = ({score, setscore}) => {
    const {t} = useTranslation()

  const handleChange = (event) => {
    const value = event.target.value;
    setscore(value);
  };

  return (
    <FormControl >
      <InputLabel id="duration-label">{t("newCourseCard.dificulty.title")}</InputLabel>
      <Select
        labelId="duration-label"
        value={score}
        label="Duración"
        onChange={handleChange}
        sx={{
            width: "560px"
        }}
      >
        <MenuItem value={70}>{t("newCourseCard.dificulty.low")}</MenuItem>
        <MenuItem value={80}>{t("newCourseCard.dificulty.medium")}</MenuItem>
        <MenuItem value={90}>{t("newCourseCard.dificulty.high")}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ScoreSelector;
