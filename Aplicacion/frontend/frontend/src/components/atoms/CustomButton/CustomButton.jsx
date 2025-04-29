// CustomButton.jsx
import { Button } from "@mui/material";

const CustomButton = ({ type = "button", text, onClick, variant = "contained", color = "primary", size = "medium", width = "300px" }) => {
  return (
    <Button
      type={type}
      variant={variant}
      onClick={onClick}
      color={color}
      size={size}
      sx={{
        width: width
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
