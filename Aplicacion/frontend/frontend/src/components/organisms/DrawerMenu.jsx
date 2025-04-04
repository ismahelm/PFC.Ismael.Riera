import React, { useState } from "react";
import CustomButton from "../atoms/Button";
import DrawerContent from "../molecules/DrawerContent";
import { Drawer } from "@mui/material";
import useRouteNames from "../../routes/RouteNames"; // Importa el hook personalizado

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
        </Drawer>
      ) : (
        <CustomButton text={"Deploy " + showMenu} onClick={handleDeploy} />
      )}
    </>
  );
};

export default DrawerMenu;
