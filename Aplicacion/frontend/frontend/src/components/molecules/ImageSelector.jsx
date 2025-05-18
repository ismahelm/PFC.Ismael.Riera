// src/components/molecules/ImageSelector.jsx
import { Button, Box, Typography } from "@mui/material";

export default function ImageSelector({ file, setFile }) {
  const allowedTypes = ["image/png", "image/jpeg"];

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
    } else {
      alert("Solo se permiten imágenes PNG o JPG.");
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
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
          Seleccionar imagen
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
