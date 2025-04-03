import useAuthStore from '../../contexts/AuthContext';
import DrawerMenu from '../organisms/DrawerMenu';
export default function WelcomeBoss()
{
    const username = useAuthStore((state) => state.username)
    const pass = useAuthStore((state) => state.password)

    return(
        <>
       <DrawerMenu/>
       welcome bosss
username: {username}
password: {pass}
   </>
    )
    



}