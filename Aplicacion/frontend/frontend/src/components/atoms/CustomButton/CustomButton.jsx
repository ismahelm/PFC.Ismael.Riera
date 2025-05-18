import { Button } from "@mui/material";

const CustomButton = ({
  type = "button",
  text,
  onClick,
  variant = "outlined",
  color = "text.secondary",
  size = "medium",
  width = "300px",
  height = "40px",
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      onClick={onClick}
      color={color}
      size={size}
      sx={{
        width: width,
        height: height,
        borderColor: "transparent",
        borderWidth: "0px",
        color: color,
        "&:hover": {
          backgroundColor: "button.reverse",
          color: "font.reverse",
        },
        "& .MuiButton-label": {
          fontWeight: "bold",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
