import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, Box, CircularProgress } from "@mui/material";
import useAuthStore from "../../contexts/AuthContext";
import { useTranslation } from "react-i18next";

const UserSelector = ({ onUserChange, width, marginBottom }) => {
  const {t}=useTranslation()
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUsers = useAuthStore((state) => state.seeUsers);

  useEffect(() => {
    const fetchusers = async () => {
      try {
        const fetchedusers = await getUsers();
        setUsers(fetchedusers.data);
        console.log(fetchedusers);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener cursos:", error);
      }
    };

    fetchusers();
  }, [getUsers]); 
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <FormControl >
      <InputLabel id="user-selector-label">{t("assignCourse.userSelector")}</InputLabel>
      <Select
        labelId="user-selector-label"
        id="user-selector"
        onChange={(e) => onUserChange(e.target.value)}
        label="Selecciona un usuario"
        sx={{
          width: width,
          marginBottom: marginBottom
        }}
      >
        <MenuItem value="">
          <em>-- Usuario --</em>
        </MenuItem>
        {users.map((user, index) => (
          <MenuItem key={index} value={user.id}>
            {user.username}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default UserSelector;
