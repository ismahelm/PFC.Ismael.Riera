import React, { useState } from "react";
import CustomButton from "../atoms/CustomButton/CustomButton";
import DrawerContent from "../molecules/DrawerContent";
import { Drawer } from "@mui/material";
import useRouteNames from "../../routes/RouteNames"; // Importa el hook personalizado
import ThemeToggleButton from "@/components/atoms/ThemeToggleButton/";
import CustomIconButton from "../atoms/CustomIconButton/CustomIconButton";
import MenuIcon from '@mui/icons-material/Menu';
const DrawerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const routeNames = useRouteNames(); // Usamos el hook aquí

  function handleDeploy() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      {showMenu ? (
        <Drawer anchor="left" open={showMenu} onClose={() => setShowMenu(false)}>
          <DrawerContent routeNames={routeNames} />
                  <ThemeToggleButton/>

        </Drawer>
      ) : (
        <>
      <CustomIconButton onClick={handleDeploy} icon={MenuIcon} iconColor="iconButton.hover" hoverIconColor="iconButton.selected"/>
      </>
      )}
    </>
  );
};

export default DrawerMenu;
