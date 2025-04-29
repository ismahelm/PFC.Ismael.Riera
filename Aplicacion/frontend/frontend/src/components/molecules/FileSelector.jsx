import { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import axios from "axios";

export default function UploadPDFMui() {
  const [file, setFile] = useState(null);

  const allowedTypes = [
    "application/pdf",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ];
  
  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
    } else {
      alert("Solo se permiten archivos PDF o PowerPoint.");
    }
  };
  const handleUpload = async () => {
    if (!file) return alert("Seleccioná un archivo primero");

    const formData = new FormData();
    formData.append("pdf", file);
    formData.append("fileName", file.name);

    try {
      const res = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Subido correctamente", res.data);
      alert("Archivo subido correctamente");
    } catch (err) {
      console.error(err);
      alert("Error al subir el archivo");
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <input
  accept=".pdf,.ppt,.pptx,application/pdf,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation"
  id="pdf-upload"
  type="file"
  style={{ display: "none" }}
  onChange={handleFileChange}
/>
      <label htmlFor="pdf-upload">
        <Button variant="contained" component="span">
          Seleccionar PDF
        </Button>
      </label>
      {file && (
        <Typography variant="body2" color="text.secondary">
          {file.name}
        </Typography>
      )}
      <Button
        onClick={handleUpload}
        variant="contained"
        color="success"
        disabled={!file}
      >
        Subir archivo
      </Button>
    </Box>
  );
}
