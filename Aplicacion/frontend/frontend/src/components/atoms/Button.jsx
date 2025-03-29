import { Button } from "@mui/material";

const CustomButton = ({ text, onClick, variant = "contained" }) => {
  return <Button variant={variant} onClick={onClick}>{text}</Button>;
};

export default CustomButton;
