// src/components/molecules/ImageSelector.jsx
import { Button, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function ImageSelector({ file, setFile, marginTop="10px" }) {
  const allowedTypes = ["image/png", "image/jpeg"];
  const{t}=useTranslation()
  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
    } else {
      alert("Solo se permiten imágenes PNG o JPG.");
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2} marginTop={marginTop}>
      <input
        accept=".png,.jpg,.jpeg"
        id="image-upload"
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <label htmlFor="image-upload">
        <Button variant="contained" component="span">
        {t("newUser.selectimagebutton")}        </Button>
      </label>
      {file && (
        <Typography variant="body2" color="text.secondary">
          {file.name}
        </Typography>
      )}
    </Box>
  );
}
