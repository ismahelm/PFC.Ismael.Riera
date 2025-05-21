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
      <InputLabel id="difficulty-label">{t("newCourseCard.dificulty.title")}</InputLabel>
      <Select
        labelId="difficulty-label"
        value={score}
        label="Dificultad"
        onChange={handleChange}
        sx={{
            width: "590px"
        }}
      >
        <MenuItem value={70}>{t("newCourseCard.dificulty.low")+" (70/100)"}</MenuItem>
        <MenuItem value={80}>{t("newCourseCard.dificulty.medium")+" (80/100)"}</MenuItem>
        <MenuItem value={90}>{t("newCourseCard.dificulty.high")+" (90/100)"}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ScoreSelector;
