import { Button } from "@mui/material";

const CustomButton = ({ type, text, onClick, variant = "contained" }) => {
  return <Button type={type}variant={variant} onClick={onClick}>{text}</Button>;
};

export default CustomButton;
