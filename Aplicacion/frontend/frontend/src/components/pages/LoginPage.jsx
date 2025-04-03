import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import CustomButton from "../atoms/Button";
import TextInput from "../atoms/TextField";
import { Box } from '@mui/material';
import useAuthStore from '../../contexts/AuthContext';

const LoginPage = () => {
    const navigate = useNavigate();
    const isLogged = useAuthStore((state) => state.isLogged)
    const login = useAuthStore((state) => state.login)
    const rol = useAuthStore((state)=> state.rol)

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    function gotowelcome(e) {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario
        console.log("submiteando");
        navigate('/welcome');
    }
    function buengotowelcome() {
        console.log("submiteando");
        login(user,pass)
        if(rol==="boss")
        {
            navigate('/boss');

        }
        else
        {
            navigate('/welcome');
        }
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
            <form onSubmit={gotowelcome} style={{ width: '300px' }}>
                <TextInput 
                    placeholder="Usuario" 
                    value={user} 
                    onchange={(e) => setUser(e.target.value)} 
                    name="username" 
                    type="text" 
                />
                <TextInput 
                    placeholder="Contraseña" 
                    value={pass} 
                    onchange={(e) => setPass(e.target.value)} 
                    name="password" 
                    type="password" 
                />
                <CustomButton text="Iniciar sesión" type="submit" />
            </form>
            Logeado: {isLogged?"si": "no"}
                <CustomButton text="el bueno" onClick={(buengotowelcome)}/>
        </Box>
        
    );
}

export default LoginPage;
