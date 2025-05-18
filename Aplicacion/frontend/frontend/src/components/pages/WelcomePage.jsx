import useAuthStore from '../../contexts/AuthContext';
import DrawerMenu from '../organisms/DrawerMenu';
import WelcomeCard from '../organisms/WelcomeCard';
export default function WelcomePage()
{
    const user = useAuthStore((state) => state.user);

    return(
        <>
        <WelcomeCard user={user}/>
       <DrawerMenu/>

    </>
    )


}