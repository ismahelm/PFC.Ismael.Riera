import useAuthStore from '../../contexts/AuthContext';
import DrawerMenu from '../organisms/DrawerMenu';
export default function WelcomePage()
{
    const user = useAuthStore((state) => state.user);

    return(
        <>
       <DrawerMenu/>

username: {user.username}
    </>
    )


}