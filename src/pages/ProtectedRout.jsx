import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import { Loading } from '../components';

// eslint-disable-next-line react/prop-types
function ProtectedRout({ children }) {
    const { user, userLoading } = useAppContext();
    console.log('user', user);
    console.log('userLoading', userLoading);

    if (userLoading) return <Loading />;
    if (!user) {
        return <Navigate to="/landing" />;
    }
    return children ? children : <div>fsdfdsf</div>;
}
export default ProtectedRout;
