import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import CustomButton from "../atoms/Button";
import TextInput from "../atoms/TextField";
import { Box } from '@mui/material';
import useAuthStore from '../../contexts/AuthContext';

const LoginPage = () => {
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login)
    const { user } = useAuthStore();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
          await login({ userName: userName, password: password });

        // eslint-disable-next-line no-unused-vars
        } catch (err) {
            console.log(err)
        }
      };
      useEffect(() => {
        if (user) { // Verificar si el usuario está definido
            if (user.role === "user") {
                navigate("/welcome");
            } else if (user.role === "trainer") {
                navigate("/welcome-trainer");
            }
        }
    }, [user, navigate]); // Se ejecuta cada vez que 'user' cambie

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
            <form onSubmit={handleLogin} style={{ width: '300px' }}>
                <TextInput 
                    placeholder="Usuario" 
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)} 
                    name="userName" 
                    type="text" 
                />
                <TextInput 
                    placeholder="Contraseña" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    name="password" 
                    type="password" 
                />
                <CustomButton text="Iniciar sesión" type="submit" />
            </form>
         
                <CustomButton text="Iniciar sesióm ;)" onClick={(handleLogin)}/>
        </Box>
        
    );
}

export default LoginPage;
