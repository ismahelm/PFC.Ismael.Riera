import useAuthStore from '../../contexts/AuthContext';
import DrawerMenu from '../organisms/DrawerMenu';
export default function WelcomePage()
{
    const username = useAuthStore((state) => state.username)
    const pass = useAuthStore((state) => state.password)

    return(
        <>
       <DrawerMenu/>

username: {username}
password: {pass}
   </>
    )
    


}