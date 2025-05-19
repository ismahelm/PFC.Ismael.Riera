import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import DrawerContent from "../molecules/DrawerContent";
import useRouteNames from "../../routes/RouteNames";
import ThemeToggleButton from "@/components/atoms/ThemeToggleButton/";
import LanguageSelector from "../molecules/LanguajeSelector";


const TopNavBar = () => {
  const routeNames = useRouteNames();

  return (
    <AppBar  color="background.paper" sx={{ marginBottom: "20px"}}>
      <Toolbar sx={{ display: "flex",  justifyContent: "space-between" }}>
        {/* Izquierda: botones de navegación */}
        <Box sx={{ display: "flex",  gap: 2 }}>
          <DrawerContent routeNames={routeNames} />
        </Box>

        {/* Derecha: botón de tema y más */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LanguageSelector/>
          <ThemeToggleButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
