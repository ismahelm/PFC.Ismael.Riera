// src/components/molecules/FileSelector.jsx
import { Button, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function FileSelector({ file, setFile }) {
  const allowedTypes = [
    "application/pdf",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ];
  const {t}= useTranslation()
  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
    } else {
      alert("Solo se permiten archivos PDF o PowerPoint.");
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <input
        accept=".pdf,.ppt,.pptx"
        id="pdf-upload"
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <label htmlFor="pdf-upload">
        <Button variant="contained" component="span" >
          {t("newCourseCard.selectButton")}
        </Button>
      </label>
      {file && (
        <Typography variant="body2" color="text.secondary">
          {file.name}
        </Typography>
      )}
    </Box>
  );
}
